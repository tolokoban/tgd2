import { Vector2 } from "../calc"

export type Polygon = Vector2[]

export interface Segment {
    point: Vector2
    vector: Vector2
}
