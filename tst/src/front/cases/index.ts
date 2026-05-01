import { TestCase } from "@/types"
    
export const testCases: Record<string, Promise<{ default: TestCase }>> = {
    "painter/clear/red": import("./painter/clear/red"),
    "painter/mesh/box": import("./painter/mesh/box"),
    "painter/node": import("./painter/node"),
}