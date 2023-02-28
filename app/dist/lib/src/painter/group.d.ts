import { PainterInterface } from "./painter-interface";
export default class PainterGroup implements PainterInterface {
    enabled: boolean;
    private readonly painters;
    constructor(painters?: PainterInterface[]);
    add(...painters: PainterInterface[]): void;
    destroy(): void;
    paint(time: number, delay: number): void;
    update(time: number, delay: number): void;
}
//# sourceMappingURL=group.d.ts.map