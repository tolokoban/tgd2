import { PainterInterface } from "./painter-interface";
export default class PainterLogic implements PainterInterface {
    private readonly logicFunction;
    constructor(logicFunction: (time: number, delay: number) => void);
    destroy(): void;
    paint(time: number, delay: number): void;
    update(time: number, delay: number): void;
}
//# sourceMappingURL=logic.d.ts.map