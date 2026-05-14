# tgd2

ToloGameDev library for WebGL2. Please look at the [online documentation](https://tolokoban.github.io/tgd2/) (in french).

## Development

Open a terminal in the `lib/` folder and type the following command
to build the library in the `dist/` folder:

```bash
npm start
```

Open another terminal in the `doc/` folder and type the following command
to launch a browser with the documentation:

```bash
npm start
```

## Release notes

### v2.0.134

- **TgdMaterialGlass configurable opacity**: Added `opacityMin` and `opacityMax` options to `TgdMaterialGlassOptions`, allowing control over glass transparency range from the constructor (defaults: `0.1` / `0.2`).

### v2.0.133

- **TgdMaterialFlatTexture mutable texture**: `texture` is now a read/write property (getter + setter) instead of a `readonly` field, allowing dynamic texture swapping at runtime.

### v2.0.132

- **New camera property**: Added `spacePerPixel` getter on `TgdCamera` — returns the size in space units of a single screen pixel at the target (useful for scalebars).
- **TgdTexture2D improvements**: Removed unnecessary `unbind()` calls after parameter/mipmap operations; added safety checks for incomplete `HTMLImageElement` and zero-size `HTMLCanvasElement`.
- **tgdCanvasCreate Safari fix**: Forces backing store allocation via `getContext("2d")` to prevent `INVALID_OPERATION` errors with textures on Safari.

### v2.0.131

- **TgdPainterNode refactored**: `TgdPainterNode` now extends `TgdPainterGroup` instead of `TgdPainter`, enabling richer group-based behavior.
  - `add()` now accepts `TgdPainter`, `TgdPainterFunction`, or `TgdInterfaceTransformable` (previously limited to `TgdPainterNodeChild`).
  - `logic` is now a collection (add/exec pattern) instead of a single optional callback, allowing multiple logic functions per node.
  - Removed the `TgdPainterNodeChild` type alias in favor of standard `TgdPainter` types.
  - Added runtime validation with `isTgdInterfaceTransformablePainter` type guard and descriptive error messages on invalid children.
- **TgdPainterGizmo resizable**: `alignX`, `alignY`, `size`, and `margin` are now reactive setters; changing them after construction updates the gizmo immediately.
- **New type guard**: Added `isTgdInterfaceTransformablePainter()` in `interface/transformable.ts` for runtime checking of transformable painters.
- **New utility**: Added `tgdCanvasToArrayBuffer()` in `utils/canvas.ts` to convert a canvas to an `ArrayBuffer` (supports PNG, JPEG, WebP).
- **TgdContext debug logging**: Constructor and `delete()` now emit debug messages via `this.console.debug` for easier tracing.
- **GLB mesh factory cleanup**: `factory/mesh-glb.ts` now uses `TgdPainter` directly instead of `TgdPainterNodeChild` / `TgdInterfaceTransformable` for children and mesh painter types.
