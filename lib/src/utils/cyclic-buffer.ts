export class TgdUtilCyclicBuffer<T> {
  private readonly buffer: (T | undefined)[];
  private _length = 0;
  private cursorNewest = -1;

  constructor(public readonly capacity: number) {
    this.buffer = [];
    for (let i = 0; i < capacity; i++) this.buffer.push(undefined);
  }

  get length() {
    return this._length;
  }

  push(value: T) {
    this.cursorNewest = (this.cursorNewest + 1) % this.capacity;
    this.buffer[this.cursorNewest] = value;
    this._length = Math.min(this.capacity, this._length + 1);
  }

  get newest(): T | undefined {
    return this.buffer[this.cursorNewest];
  }

  get oldest(): T | undefined {
    const index =
      (this.capacity + this.cursorNewest - this._length + 1) % this.capacity;
    return this.buffer[index];
  }
}
