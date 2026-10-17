# `lib/` coding style

`@tolokoban/tgd` is a TypeScript library that wraps WebGL2. This file describes how the code
is written so new code looks like the existing code.

## Tooling

- TypeScript strict mode (`strict`, `noImplicitAny`, `strictNullChecks`), target ES2020, ESM.
- Build: `build-typescript-library --allow-circular` (`npm start` watches, `npm run build` builds once).
- API docs: `typedoc` (`npm run doc`) writes to `../doc/public/docs`. **TSDoc comments are the public
  documentation**, so they must stay accurate.
- Tests: Jest + jsdom + `jest-canvas-mock`. Tests are `*.test.ts` files next to the code they test
  (mostly in `math/` and `utils/`). There is no WebGL in the tests, so painters are tested visually
  in `tst/` and the `doc/` demos, not in Jest.
- Formatting: `oxfmt` (root `.oxfmtrc.json`): **4 spaces, no semicolons, double quotes, print width 120**.
  Prettier config: trailing commas `es5`.
- Lint: ESLint with `typescript-eslint` + `unicorn`. Unused variables are allowed only with a `_` prefix.

## Imports

- Inside `lib/src`, import through the `@tgd/*` path alias (`@tgd/context`, `@tgd/math`, `@tgd/utils`…).
  Use relative imports only for siblings in the same feature folder (`"../painter"`, `"./group"`, `"./background.frag"`).
- Use `import type` / inline `type` for imports used only as types.
- Every folder has an `index.ts` barrel that re-exports with `export * from "./file"`.
  `src/index.ts` re-exports every folder. **A new public file must be added to its folder's `index.ts`.**

## Naming

| Kind                                   | Convention                         | Example                                      |
| -------------------------------------- | ---------------------------------- | -------------------------------------------- |
| Public class / interface / type        | `Tgd` + PascalCase                 | `TgdPainterClear`, `TgdPainterClearOptions`  |
| Public function                        | `tgd` + camelCase                  | `tgdCalcRandom3`, `tgdLoadGlb`               |
| Type guards                            | `isTgdXxx` / `assertTgdXxx`        | `isTgdTypeArrayForElements`                  |
| GLSL snippet factories (`src/code`)    | `tgdCodeFunction_<glslName>`       | `tgdCodeFunction_mapRange`                   |
| Low-level WebGL helpers (`utils`)      | `webgl` prefix                     | `webglPresetDepth`, `webglLookup`            |
| Options interface                      | `<ClassName>Options`               | `TgdPainterBackgroundOptions`                |
| Files and folders                      | kebab-case                         | `background-with-depth/`, `group-camera.ts`  |
| Private backing field of a get/set     | `_` prefix                         | `private _resolution = 1`                    |
| Event handlers                         | `handleXxx` arrow-function fields  | `private readonly handleResize = () => {…}`  |
| Events                                 | `eventXxx` (`TgdEvent`)            | `context.eventResize`, `pointer.eventTap`    |

Painters are all named `TgdPainter<Thing>`. A variant is `TgdPainter<Thing><Variant>`
(`TgdPainterSegmentsMorphing`, `TgdPainterSpritesHue`).

## GLSL naming

- Uniforms: `uni` prefix (`uniTexture`, `uniModelViewMatrix`, `uniProjectionMatrix`).
- Attributes: `att` prefix (`attPoint`, `attUV`, `attXYZR0`). glTF meshes may use `POSITION`, `NORMAL`…
- Varyings: `var` prefix (`varUV`, `varColor`).
- Fragment output: `FragColor`.
- Always `#version 300 es` (WebGL2 / GLSL ES 3.00).

## Painters (`src/painter`)

Every painter extends the abstract `TgdPainter` (`painter/painter.ts`) and implements:

- `paint(time: number, delta: number): void`, called every frame. `time` and `delta` are in **seconds**.
- `delete(): void`, which frees every GPU resource the painter created (programs, VAOs, buffers,
  textures it owns). If there is nothing to free, write `/** Nothing to destroy. */ delete(): void {}`.

Painters that contain other painters extend `TgdPainterGroup` (or `TgdPainterState`, which adds
WebGL state) and call `super.paint(time, delta)`. A painter can also be a plain function
(`TgdPainterFunction`), and `TgdPainterGroup.add()` wraps functions in `TgdPainterLogic`.

### File layout

A simple painter can be a single file in `painter/` (`clear.ts`, `scissor.ts`). Anything with shaders
or helpers gets its own folder:

```
painter/bbox/
    index.ts              export * from "./bbox"
    bbox.ts               the class, which builds its shaders with TgdPainterProgram
```

Then add `export * from "./bbox"` to `painter/index.ts` (the list is alphabetical).

Older painters (`background/`, `axes/`, `skybox/`…) still have `xxx.vert.ts` / `xxx.frag.ts` files.
Don't copy that layout for new code (see "Shaders" below).

### Constructor signature

```ts
constructor(
    private readonly context: TgdContext, // or the narrowest shape needed: { gl: WebGL2RenderingContext }
    options: Partial<TgdPainterXxxOptions> = {}, // or a required `TgdPainterXxxOptions`
) {
    super()
    …
}
```

- The **first argument is always the context**. Keep it as a `private`/`protected readonly`
  parameter property when `paint()` needs it. Accepting a minimal structural type
  (`{ gl: WebGL2RenderingContext; webglParams: WebglParams }`) is fine when the painter needs
  nothing else.
- The **second argument is an options object** described by an exported `TgdPainterXxxOptions`
  interface. Give defaults by destructuring (`{ x = 0, zoom = 1 }: Partial<…> = {}`) or with `??`.
- Options that can change after construction become **public mutable fields**
  (`public zoom = 1`, `public active = true`). Fixed resources become `private readonly`.
- Name the painter for debugging: `this.name = options.name ?? \`Clear/${this.name}\``, or pass
  `name` to `super()`.

### Inside `paint()`

- Destructure first: `const { gl } = this.context` and `const { vao, program, zoom } = this`.
- With `TgdPainterProgram`, update uniforms in its `onEnter` callback. It handles the program, the VAO,
  the textures and the WebGL state itself.
- In older painters that draw by hand, the order is: `program.use()`, set uniforms, activate textures,
  then draw inside a state wrapper so the WebGL state is restored afterwards:

  ```ts
  TgdPainterState.do(this.context, {
      cull: webglPresetCull.off,
      depth: webglPresetDepth.off,
      action: () => {
          vao.bind()
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
          vao.unbind()
      },
  })
  ```

  With a material, use `material.applyState(context, () => {…})`.
- If you change global GL state by hand (scissor, viewport…), read the previous value and restore it
  (see `scissor.ts`).
- Camera matrices come from `context.camera.matrixModelView` / `matrixProjection`, or from
  `TgdUniformBufferObjectCamera`.

### Materials

Let says you want to create materiel `TgdMaterialFooBar`.
Then, in the generated shader, you must prefix all variables with `foobar_`, all uniforms with `uniFooBar_`, all varyings with `varFooBar_` and all attributes with `attFooBar_`.

### Shaders: always use `TgdPainterProgram`

**Every new shader is written with `TgdPainterProgram`** (`painter/program.ts`). Do not write new
`xxx.vert.ts` / `xxx.frag.ts` template strings. Do not assemble `TgdProgram` + `TgdDataset` +
`TgdVertexArray` by hand, or call `TgdShaderVertex` / `TgdShaderFragment` directly.

A painter that needs shaders extends `TgdPainterGroup` and adds one `TgdPainterProgram` per draw call.
`TgdPainterBBox` (`painter/bbox/bbox.ts`) is the reference example:

```ts
const uniforms = new TgdUniformBufferObject(context, {
    uniforms: { uniColor: "vec4" },
})
const program = new TgdPainterProgram(context, {
    drawMode: "TRIANGLES",
    state: { depth: "less", blend: "alpha", cull: "back" },
    uniforms: { uniforms, uniformsCamera: new TgdUniformBufferObjectCamera(context) },
    textures: { uniTexture: texture },
    dataset: {
        attribs: {
            attPos: { type: "vec3", data: attPos },
        },
    },
    elements: new Uint8Array([…]),
    varying: { varUV: "vec2" },
    vert: {
        mainCode: ["gl_Position = uniProjectionMatrix * uniModelViewMatrix * vec4(attPos, 1);"],
    },
    frag: {
        mainCode: ["FragColor = uniColor;"],
    },
    onEnter: () => {
        uniforms.values.uniColor = this.color.toArayNumber4()
    },
})
this.add(program)
```

- Uniforms go in uniform buffer objects (`TgdUniformBufferObject`). Camera matrices come from
  `TgdUniformBufferObjectCamera`.
- GLSL helpers go in `vert.functions` / `frag.functions`. Reuse the `tgdCodeFunction_*` factories from
  `src/code` instead of copying GLSL.
- WebGL state goes in the `state` option, not in manual `gl.enable()` calls.
- Per-frame values are set in `onEnter`. Extra cleanup goes in `onDelete`.

When you change an existing painter that still has static shaders, it's fine to keep them for a small
fix. A substantial rewrite should move it to `TgdPainterProgram`.

GLSL code is a `TgdCodeBloc`: **an array of strings, where a nested array means one more indentation
level**:

```ts
mainCode: [
    "if (len == 0.0) {",
    ["pos *= radius;", "pos += center.xyz;"],
    "} else {",
    ["vec3 Z = dir / len;"],
    "}",
],
```

Matrix-like numeric literals (vertices, indices) are kept aligned by putting
`// biome-ignore format: keep matrix-like alignment` and `// prettier-ignore` above them.

## General code style

- Classes with explicit `public` / `private` / `protected` / `readonly`. Prefer `readonly` everywhere possible.
- Getter/setter pairs that skip work when the value does not change:

  ```ts
  set resolution(resolution: number) {
      if (this._resolution === resolution) return

      this._resolution = resolution
      this.handleResize()
  }
  ```

- **Guard clauses with an early `return`, followed by a blank line.** Single-statement `if`s may be
  written on one line without braces.
- Callbacks stored as `private readonly handleXxx = (…) => {…}` so they can be removed from listeners.
  Every `addListener` in a constructor has a matching `removeListener` in `delete()`.
- Overloaded constructors are allowed (see `TgdPainterGroup`).
- Errors: `throw new Error("[TgdPainterXxx] Explanation of what is wrong!")`, with the class name
  in brackets.
- Logging goes through `context.console` or `TgdPainter.log` / `TgdLogger`, never a bare `console.log`
  in committed library code.
- Plain `for` / `for…of` loops are preferred over `reduce` in hot paths (this is real-time rendering:
  avoid allocations inside `paint()`).
- Tuples are labelled when helpful: `[red: number, green: number, blue: number, alpha: number]`.
  Use `ArrayNumber2/3/4` and `TgdVec2/3/4` for vectors. Accept both when it is convenient for the caller.

## Comments

- Comments and docs are in **English**.
- TSDoc on public classes, options and fields. Describe units and ranges ("from 0 (left) to 1 (right)"),
  give defaults as ``Default to **3**.`` or `Default: [0, .5, 1]`, and link options with
  `@see {@link TgdPainterClearOptions}`.
- Add an `@example` block with a short `ts` snippet for anything non-obvious.
- Inline comments only explain *why* (`// Just a sphere`, `// We took all vertical space…`).

## Debug traces

Lines like
`console.log("🐞 [file@68] x =", x) // @FIXME: Remove this line written on 2026-09-02 at 16:51`
are temporary traces the author inserts from the editor. They must not stay in a release. Point them
out instead of silently deleting them, and never add new ones in library code.
