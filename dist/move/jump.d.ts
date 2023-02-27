import { MoveInterface } from "./types";
export interface MoveJumpOptions {
    duration: number;
    height: number;
}
export declare function makeMoveJump(options: Partial<MoveJumpOptions>): MoveInterface;
