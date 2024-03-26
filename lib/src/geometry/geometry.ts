import { TgdDataset } from "@tgd/dataset"
import { WebglDrawMode } from "@tgd/types"

export interface TgdGeometryOptions {
    dataset: TgdDataset
    drawMode: WebglDrawMode | number
    elements?:
        | {
              buff: BufferSource
              type: number
          }
        | Uint8Array
        | Uint16Array
        | Uint32Array
    attPosition?: string
    attNormal?: string
    attUV?: string
}

/**
 * Geometry is used to define a mesh.
 * It must hold at least one vec3 attributes
 * for the vertices.
 */
export class TgdGeometry {
    public readonly attPosition: string
    public readonly attNormal: string
    public readonly attUV: string
    public readonly count: number

    protected _dataset: TgdDataset
    protected _drawMode: WebglDrawMode | number
    protected _elementsBuff?: BufferSource
    protected _elementsType: number

    constructor(options: TgdGeometryOptions) {
        const {
            dataset,
            drawMode,
            attPosition = "POSITION",
            attNormal = "NORMAL",
            attUV = "TEXCOORD_0",
        } = options
        this._dataset = dataset
        this._drawMode = drawMode
        const elements = convertElements(options.elements)
        this._elementsBuff = elements?.buff ?? undefined
        this._elementsType = elements?.type ?? 0
        this.attPosition = attPosition
        this.attNormal = attNormal
        this.attUV = attUV
        this.count = elements?.count ?? dataset.count
    }

    get dataset(): Readonly<TgdDataset> {
        return this._dataset
    }

    get drawMode() {
        return this._drawMode
    }

    get elementsBuff() {
        return this._elementsBuff
    }

    get elementsType() {
        return this._elementsType
    }
}

function convertElements(
    elements?:
        | {
              buff: BufferSource
              type: number
          }
        | Uint8Array
        | Uint16Array
        | Uint32Array
):
    | {
          buff: BufferSource
          type: number
          count: number
      }
    | undefined {
    if (!elements) return elements

    if (elements instanceof Uint16Array)
        return {
            buff: new DataView(elements.buffer),
            type: WebGL2RenderingContext.UNSIGNED_SHORT,
            count: elements.length,
        }
    if (elements instanceof Uint8Array)
        return {
            buff: new DataView(elements.buffer),
            type: WebGL2RenderingContext.UNSIGNED_BYTE,
            count: elements.length,
        }
    if (elements instanceof Uint32Array)
        return {
            buff: new DataView(elements.buffer),
            type: WebGL2RenderingContext.UNSIGNED_INT,
            count: elements.length,
        }
    let count = elements.buff.byteLength
    if (elements.type === WebGL2RenderingContext.UNSIGNED_SHORT) {
        count >>= 1
    } else if (elements.type === WebGL2RenderingContext.UNSIGNED_INT) {
        count >>= 2
    }
    return {
        ...elements,
        count,
    }
}
