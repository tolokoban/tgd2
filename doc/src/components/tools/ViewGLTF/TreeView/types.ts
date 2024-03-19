export type MainSection =
    | {
          type: "msh"
          id: number
          primitiveId: number
      }
    | {
          type: "img" | "att" | "idx"
          id: number
      }
