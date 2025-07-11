import { TgdEvent } from "@tgd/event";
import {
  TgdInputPointer,
  TgdInputPointerEventMove,
  TgdInputPointerEventFinger,
  TgdInputPointerEventTap,
  TgdInputPointerEventZoom,
} from "@tgd/types";
import { TgdUtilCyclicBuffer } from "@tgd/utils";

const MOUSE_BUTTON_RIGHT = 2;

export class TgdInputPointerImpl implements TgdInputPointer {
  readonly eventTap = new TgdEvent<Readonly<TgdInputPointerEventTap>>();
  readonly eventMoveStart = new TgdEvent<Readonly<TgdInputPointerEventMove>>();
  readonly eventMove = new TgdEvent<Readonly<TgdInputPointerEventMove>>();
  readonly eventMoveEnd = new TgdEvent<Readonly<TgdInputPointerEventMove>>();
  readonly eventZoom = new TgdEvent<Readonly<TgdInputPointerEventZoom>>();
  /**
   * This is a tap only of the pointer touched for less that
   * `tapDelay` milliseconds.
   */
  public tapDelay = 300;

  private moves = new TgdUtilCyclicBuffer<TgdInputPointerEventFinger>(8);

  private controlKeys = {
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
  };
  private start: TgdInputPointerEventFinger = {
    x: 0,
    y: 0,
    t: 0,
    fingersCount: 1,
  };
  private current: TgdInputPointerEventFinger = {
    x: 0,
    y: 0,
    t: 0,
    fingersCount: 1,
  };
  private previous: TgdInputPointerEventFinger = {
    x: 0,
    y: 0,
    t: 0,
    fingersCount: 1,
  };
  /**
   * If not null, the pointer is touching.
   */
  private pointerEvent: PointerEvent | null = null;

  constructor(private readonly canvas: HTMLCanvasElement) {
    canvas.addEventListener("pointerdown", this.handlePointerDown, true);
    canvas.addEventListener("wheel", this.handleCanvasWheel);
    canvas.addEventListener("contextmenu", this.handleContextMenu);
    canvas.addEventListener("pointermove", this.handlePointerMove);
    canvas.addEventListener("pointerup", this.handlePointerUp);
  }

  get x() {
    return this.moves.newest?.x ?? 0;
  }
  get y() {
    return this.moves.newest?.y ?? 0;
  }

  get speedX() {
    const x1 = this.moves.newest?.x ?? 0;
    const t1 = Date.now();
    const x0 = this.moves.oldest?.x ?? 0;
    const t0 = this.moves.oldest?.t ?? 0;
    return t0 < t1 ? (1e3 * (x1 - x0)) / (t1 - t0) : 0;
  }
  get speedY() {
    const y1 = this.moves.newest?.y ?? 0;
    const t1 = Date.now();
    const y0 = this.moves.oldest?.y ?? 0;
    const t0 = this.moves.oldest?.t ?? 0;
    return t0 < t1 ? (1e3 * (y1 - y0)) / (t1 - t0) : 0;
  }

  isTouching(
    hitTest?: (event: Readonly<TgdInputPointerEventFinger>) => boolean,
  ) {
    if (!this.pointerEvent) return false;

    if (!hitTest) return true;

    return hitTest(this.current);
  }

  detach() {
    const { canvas } = this;
    if (!canvas) return;

    canvas.removeEventListener("pointerdown", this.handlePointerDown);
    canvas.removeEventListener("wheel", this.handleCanvasWheel);
    canvas.removeEventListener("contextmenu", this.handleContextMenu);
    canvas.removeEventListener("pointermove", this.handlePointerMove);
    canvas.removeEventListener("pointerup", this.handlePointerUp);
  }

  private readonly handleContextMenu = (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
  };

  private readonly handleCanvasWheel = (event: WheelEvent) => {
    let delta = event.deltaX + event.deltaY + event.deltaZ;
    delta = delta > 0 ? 1 : -1;
    this.eventZoom.dispatch({
      current: this.getPoint(event),
      direction: delta,
      preventDefault: () => event.preventDefault(),
      ...this.controlKeys,
    });
  };

  private readonly handlePointerDown = (event: PointerEvent) => {
    if (!event.isPrimary) return;

    this.canvas.setPointerCapture(event.pointerId);
    event.preventDefault();
    event.stopPropagation();
    this.pointerEvent = event;
    const point = this.getPoint(event);
    this.start = this.current = this.previous = point;
    this.eventMoveStart.dispatch({
      start: point,
      current: point,
      previous: point,
      ...this.controlKeys,
    });
  };

  private readonly handlePointerMove = (event: PointerEvent) => {
    const point = this.getPoint(event);
    this.moves.push(point);
    if (!event.isPrimary || !this.pointerEvent || !this.canvas) return;

    this.previous = this.current;
    this.current = point;
    this.eventMove.dispatch({
      start: this.start,
      current: this.current,
      previous: this.previous,
      ...this.controlKeys,
    });
  };

  private readonly handlePointerUp = (event: PointerEvent) => {
    if (!event.isPrimary || !this.pointerEvent) return;

    event.preventDefault();
    this.current = this.getPoint(event);
    this.eventMoveEnd.dispatch({
      start: this.start,
      current: this.current,
      previous: this.previous,
      ...this.controlKeys,
    });
    this.pointerEvent = null;
    // Tap event.
    if (event.timeStamp - this.start.t < this.tapDelay) {
      this.eventTap.dispatch({
        ...this.start,
        ...this.controlKeys,
      });
    }
  };

  private getPoint(
    event: PointerEvent | WheelEvent,
  ): TgdInputPointerEventFinger {
    this.controlKeys = {
      altKey: event.altKey || event.buttons === MOUSE_BUTTON_RIGHT,
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
      shiftKey: event.shiftKey,
    };
    const { left, top, width, height } = this.canvas.getBoundingClientRect();
    const x = 2 * ((event.clientX - left) / width - 0.5);
    const y = -2 * ((event.clientY - top) / height - 0.5);
    return { x, y, t: event.timeStamp, fingersCount: 1 };
  }
}
