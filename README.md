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

### v2.2.0

- **TgdPainterLOD Quadtree mode**: Added a `mode` option (`"xyz"` | `"xz"`) to `TgdPainterLODOptions`. When set to `"xz"`, the LOD uses a Quadtree instead of an Octree, subdividing only along the X and Z axes (Y axis is never split). Defaults to `"xyz"`.
- **TgdPainterLOD mutable `surfaceThreshold`**: `surfaceThreshold` is now a public property that can be changed after construction.

### v2.1.4

- **TgdUniformBufferObjectCamera new uniforms**: Added `uniScreenSize` (`vec2`, width/height in pixels), `uniScreenAspectRatio` (`float`, width/height), and `uniScreenAspectRatioInverse` (`float`, height/width) to the camera UBO.

### v2.1.3

- **TgdPainterMesh.computeBoundingBox fix**: Now correctly uses `geometry.attPosition` instead of the hardcoded `"POSITION"` attribute name, fixing bounding box computation for geometries with a custom position attribute name.

### v2.1.2

- `TgdCamera.fitBoundingBox` now takes a `Readonly<TgdBoundingBox>` as unique argument.

### v2.1.0

- New util function `tgdTypeArrayForElements()` that will create the smallest typed array for elements indices.

### v2.0.147

- **TgdMaterialFlatTexture** provide a `texture` attribute, but until now, changing it was not working.

### v2.0.145

- **TgdPainterPointsCloud** and **TgdPainterPointsCloudMorphing** were using squares with back face facing.

### v2.0.144

- **TgdContext resolution deferred to paint cycle**: Setting `context.resolution` no longer immediately resizes the canvas. Instead, the canvas dimensions are updated at the top of the next `actualPaint` call using `Math.ceil`, avoiding mid-frame layout thrashing and ensuring consistent sizing.

### v2.0.143

- **TgdPainterOverlay resolution fix**: Overlay coordinate transformations now correctly account for `context.resolution`, fixing layout misalignment on high-DPI displays when a custom `width`/`height` is set.

### v2.0.142

- **TgdPainterSegments** and **TgdPainterSegmentsMorphing**: fix a bug in the materials.

### v2.0.141

- **TgdPainterPointsCloud rewritten with instanced billboards**: Points are now rendered using `TRIANGLE_FAN` instanced quads instead of `gl_Point`, removing the macOS 64px `gl_PointSize` limitation. New `enableSpecular` option, shared `fragCodeSphere`/`fragCodeFlat` shader helpers extracted into dedicated modules with configurable `lightDirection` and `depthPrecision`.
- **TgdPainterPointsCloudMorphing uses instanced billboards**: Morphing cloud also switched from `gl_Point` to instanced quads for macOS compatibility, using the same shared shader helpers.
- **TgdContext.pointSizeMin / pointSizeMax**: New readonly properties exposing the hardware `ALIASED_POINT_SIZE_RANGE`.
- **TgdContext.execBeforeNextPaint / execAfterNextPaint**: Schedule one-shot actions to run before or after the next paint cycle.
- **TgdCamera.fitBoundingBox()**: New method to automatically position the camera (distance, near, far, orientation) to frame a `TgdBoundingBox`.
- **TgdCamera.setCurrentState() returns `this`**: Enables fluent chaining.
- **TgdMaterial texture management**: Materials now accept a `textures` record (`Record<string, TgdTexture2D | TgdTextureCube>`) that auto-generates sampler uniforms and activates textures during paint — no manual `texture.activate()` needed.
- **TgdPainterGroup `active` option**: Groups can now be created with `active: false` to skip painting.
- **TgdPainterSegments `varRadiusHasBeenClamped`**: New varying that indicates when a segment radius was clamped to minimum size.
- **TgdCodeBloc accepts `false`**: `false` values are now valid in code blocs (filtered out like `null`), simplifying conditional shader code generation.

### v2.0.140

- **TgdPainterGizmo error handling**: The async initialization now catches errors via `context.console.error` and guards against painting on a deleted context.
- **Console methods as arrow functions**: `Console` class methods (`log`, `info`, `debug`, `error`, `warn`) are now arrow function properties, ensuring correct `this` binding when passed as callbacks (e.g. `.catch(context.console.error)`).

### v2.0.139

- Fix a bug in TgdContext related to `isDeleted`.

### v2.0.137

- **TgdContext verbose defaults to `false`**: The `verbose` option now defaults to `false` instead of `true`, reducing console noise in production.
- **TgdContext deletion safety**: `actualPaint` now guards against painting after the context has been deleted; `delete()` cancels any pending animation frame.
- **TgdContext.isDeleted**: New getter to check whether the context has been deleted.
- **TgdPainter unique IDs**: Painter IDs are now human-readable strings (`[#0]`, `[#1]`, …) generated by the new `nextId()` utility; constructor accepts an optional `name` parameter; added `nameUniq` getter for guaranteed-unique display names.
- **TgdPainterGroup name forwarding**: Constructor now passes the `name` option to the parent `TgdPainter` constructor.
- **New utility `TgdValueWaitable<T>`**: Async-friendly value holder — call `waitUntilDefined()` to get a `Promise<T>` that resolves as soon as the value is set.
- **New utility `nextId()`**: Centralized incremental ID generator exported from `utils/id`.

### v2.0.136

- **New TgdGeometry.join()**: Static method and standalone `tgdGeometryJoin()` function to merge multiple geometries into a single one, combining positions, normals, UVs, and elements with proper index offsetting.
- **TgdGeometry.fitElementsInTypeArray()**: New static helper that picks the smallest typed array (`Uint8Array`, `Uint16Array`, or `Uint32Array`) for a given elements array based on the maximum index value.
- **New isTgdTypeArrayForElements type guard**: Runtime check for valid element typed arrays (`Uint8Array | Uint16Array | Uint32Array`).
- **TgdDataset.get()**: New method to extract all values of a given attribute into a plain `number[]` array.
- **TgdTexture2D**: Better texture format. Only the compatible triplet of internal format, format and type are available.
- **TgdContext.extensions**: Access to all the WebGL2 extensions that are available on this hardware.

### v2.0.135

- **New TgdPainterParticles**: Fully implemented GPU particle system using Transform Feedback with ping-pong buffers, configurable draw mode (`POINTS`, `LINES`, `TRIANGLES`), custom uniforms callback, and automatic attribute-to-varying mapping via `prefixAttribute`/`prefixVarying` options.
- **TgdShaderVertex improvements**: Added `name`, `clone()`, `createShader()` methods, and `mainCodeHeaders` for injecting code before the main body.
- **TgdShaderFragment improvements**: Added `name` and `clone()` methods.
- **TgdDataset.getTypeRecord()**: New method returning the full attribute type record.

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
