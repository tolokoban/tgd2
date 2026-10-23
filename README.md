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

### v2.9.0

- **TgdFilterDeferredShadingOptions.cavity.outline**: The cavity finds a valley on each silhouette, which gave a dark contour on the objects in front of other objects, but not in front of nothing. With the new `outline` option (default `true`), the contour is drawn everywhere: where nothing has been painted next to an object, the filter now outputs a transparent black instead of `(0, 0, 0, 0)`, which darkens what is behind it with an alpha blending. This costs 4 texture reads on these pixels. Set `outline: false` to remove the contour everywhere: the cavity is then ignored where the depth jumps between neighbour pixels (if `textureDepth` is given).
- **TgdPainterFilter.flipY defaults to "auto" (breaking)**: `flipY` can now be `"auto"`, the new default. The painter then reads the `orientation` of the input texture at every paint, so images and framebuffer outputs are both painted the right way up without any option. Before, the default was `false`, which painted the outputs of framebuffers (like `TgdPainterDeferredShading.textureAlbedo`) upside down unless `flipY: true` was given. Explicit `true` and `false` keep their meaning, but code that compensated the flip of a render target in another way (a `scaleY: -1`, for instance) must be updated.
- **TgdTexture2D.orientation**: New public field of type `TgdTextureOrientation` that tells which edge of the picture is at `v = 0`: `"top-down"` (default) or `"bottom-up"`. `loadBitmap()` and `loadData()` set it to `"top-down"`, or to `"bottom-up"` when `storage.flipY` is `true`, and `loadData()` has a new `orientation` option to override it. You can also set it by hand.
- **TgdTexture2D.attachToFramebuffer()**: New method that attaches the texture to the bound framebuffer and sets its `orientation` to `"bottom-up"`, because WebGL writes the bottom row of the viewport first. All the painters of the library now use it instead of `gl.framebufferTexture2D()`. Use it too in your own framebuffers to keep `orientation` right.
- **TgdPainterDeferredShading.textureIDs**: New `R32UI` texture that holds the `id` of the meshes (0 where there is none). It is filled in a second pass, only for the meshes with an `id` greater than 0, when the new `enableIDs` option is set. `enableIDs` can also be a number to change the resolution of the texture (`1/4` divides its width and height by 4). The pass can be switched on/off at runtime with the public `enableIDs` field, and its resolution changed with `resolutionIDs`. The meshes without `id` still hide the ones behind them, because the pass is tested against `textureDepth`. Materials are ignored in this pass. Read the texture with a `usampler2D` and `texelFetch()`. The new `readID(x, y)` method returns the `id` under a point of the screen (same coordinates as the pointer events), for object picking.
- **TgdMeshTreeOptions.filter**: Paints only the meshes for which `filter(mesh)` returns `true` (their children are still visited). `TgdMeshTree.count` gives the number of meshes painted in the current frame.
- **TgdFilterAntiAliasing rework**: The filter now implements FXAA (Fast Approximate Anti-Aliasing) instead of blurring the whole image. Only the pixels on an edge are processed: the direction and the ends of the edge are found, and the pixel is blended with its neighbour across the edge. It is meant for framebuffers and deferred shading, where MSAA cannot be used: put it at the end of the `TgdPainterFilter` chain. `strength` (default 1) is now the mix between the input and the anti-aliased image. New public fields: `subpixel` (default 0.75) smooths the details smaller than a pixel, `edgeThreshold` (default 0.166) and `edgeThresholdMin` (default 0.0833) set the minimal contrast of an edge, and `alpha` (default `false`) weights the colors by their alpha so the edges of transparent images are smoothed too. The input texture should use `LINEAR` filtering.
- **New TgdGeometryPath**: A flat shape (Z = 0) filled from an SVG path given as the first argument of the constructor. All the SVG path commands are supported, with their lowercase (relative) versions: `M`, `L`, `H`, `V`, `Q`, `T` (smooth quadratic Bézier), `C`, `S` (smooth cubic Bézier), `A` (elliptical arc) and `Z`. Holes follow the `fillRule` option, like the SVG `fill-rule` attribute: `"evenodd"` (default) or `"nonzero"` (use it for font glyphs). The contours can cross themselves and each other (font glyphs often do): they are first replaced by the outline of the filled area, which is then triangulated by ear clipping. `curveSegments` (default 16) is the number of segments of each Bézier curve, or of each quarter turn of an arc, and `flipY` (default false) flips the Y axis, which points down in SVG. With `thickness` greater than 0, the shape is extruded along Z, from `-thickness / 2` to `+thickness / 2`. The sides have smooth normals along the curves and sharp ones on corners of more than 30°. The `bevel` option (`width`, `segments` and `profileShape`, like the bevel of `TgdGeometryBox`) rounds the edges of the front and back faces. Where the details of the shape are thinner than twice the bevel width, the front and back faces get holes instead of overlapping. The geometry has `POSITION`, `NORMAL` and `TEXCOORD_0` attributes: UVs go from `[0, 1]` (bottom left) to `[1, 0]` (top right) over the bounding box of the shape on the front and back faces, and on the sides U goes from 0 to 1 along the contour and V from 1 (front) to 0 (back).
- **New tgdGeometrySubdivision()**: Subdivides a `TRIANGLES` geometry like the Subdivision Surface modifier of Blender, and returns a new indexed geometry. `mode` is `"catmull-clark"` (smooth, default) or `"simple"` (the faces are split but the shape is kept), and `levels` (default 2) is the number of iterations. The vertices are welded by position, so a `TgdGeometryBox` is subdivided as a closed mesh. With `rebuildQuads` (default true), pairs of coplanar triangles sharing their longest edge are merged into quads first, because Catmull-Clark gives much better results on quads. UVs are linearly interpolated in each face, and normals are recomputed (smooth) in `"catmull-clark"` mode. If the geometry has tangents (and UVs), they are recomputed with `computeTangents()`. Only the position, normal, tangent and UV attributes are kept.
- **TgdGeometry.computeTangents()**: New method that computes the vec4 tangents from the positions, normals and UVs, and stores them in the `attTangent` attribute (created if missing). `xyz` points towards increasing U and is orthogonal to the normal (Gram-Schmidt), and `w` is the handedness of the TBN basis, as in glTF: `bitangent = cross(normal, tangent.xyz) * tangent.w`. The contributions of the triangles are weighted by their area. Normals are computed first if they are missing. Geometries without UVs or not in `TRIANGLES` draw mode are left unchanged, with an error in the console. Built-in shapes like `TgdGeometryBox` can now be used with `TgdPainterDeferredShading` normal maps.
- **TgdMaterialGlass rework (breaking)**: The glass now follows a thin glass model, still in a single pass: `F * reflection + (1 - F) * (background * (1 - opacity) + tint * opacity)`, with a premultiplied alpha blending. `F` is the Fresnel reflectance (Schlick), computed from the new `ior` option (default 1.5), so the reflections are weak when looking at the glass straight on and strong near the silhouette. The reflections are no longer tinted by `color`, and their brightness no longer raises the opacity, so they don't hide the background anymore. `color` is now the base color of the glass: its alpha is the minimal opacity of the tint, where the glass faces the camera, which replaces the removed `opacityMin` option. Its default is `(0.4, 0.8, 1, 0.1)`, and it is a public `color` field you can change at runtime (it multiplies the texture when `color` is a `TgdTexture2D`). `opacityMax` (default 0.6 instead of 0.2) is the maximal opacity reached at grazing angles, where the light crosses more glass. The new `roughness` option (default 0.05) blurs the reflected environment with the mipmaps of the cube texture. `lights` and `normalMap` were ignored and are now used: each `TgdLight` adds a GGX highlight, and the normal map bends the normals. The unused `ambientIntensity` option has been removed. The depth is now tested (but still not written), so opaque objects in front of the glass hide it: paint the glass after the opaque objects. Back faces get flipped normals. The new `skyboxTransfo` option (also a readonly `skyboxTransfo` field you can mutate at runtime) rotates the reflected cube texture; pass `skybox.transfo` to keep it in sync with a `TgdPainterSkybox`.
- **TgdPainterMeshGltf glass detection**: When the glTF material uses the `KHR_materials_transmission` extension with a `transmissionFactor` greater than 0 (exported by Blender for a Principled BSDF with a "Transmission Weight"), the default material is now a `TgdMaterialGlass` instead of a `TgdMaterialGltf`. Its `color` is the `baseColorFactor` (or the `baseColorTexture`) with an alpha of `1 - 0.9 * transmissionFactor`, its `ior` comes from `KHR_materials_ior` (default 1.5), its `roughness` is the `roughnessFactor`, its `normalMap` is the `normalTexture`, and it reflects the `skybox` option. The textures created for this material are released by the painter's `delete()`. The description given to a custom `material` function has a new `transmission` attribute (`factor`, `ior` and `roughness`) for such materials, and `TgdFormatGltfMaterial` has a typed `extensions` attribute.
- **TgdPainterMeshGltf fix**: The attributes (`NORMAL`, `TEXCOORD_0`) were checked on the first primitive of the first mesh instead of the one given by `meshIndexOrName` and `primitiveIndex`.
- **New TgdFilterScale**: Fits the texture into the output while keeping its aspect ratio, then scales it around the center. `mode` is `"cover"` (fills the output and crops the overflow, default) or `"contain"` (shows the whole texture, with transparent empty parts). `scale` is applied after the fit and can be a single number (same scale on X and Y), a `TgdVec2` or an `[x, y]` array. Both are public fields. The output size is the current viewport, so the fit is done on the screen when the filter is the last of a `TgdPainterFilter`.
- **TgdGeometryBox bevel**: The new `bevel` option rounds the edges and corners of the box, like the Bevel modifier of Blender. `width` is the bevel amount (clamped to half the smallest size), `segments` the number of segments of the curved edges, and `profileShape` (default 0.5) the superellipse factor: 0.25 for a straight chamfer, 0.5 for a circular arc, towards 1 for a square corner, and towards 0 for a concave one. The normals are smooth on the bevel and flat on the 6 faces. `keep` (`"both"`, `"bevel"` or `"face"`) keeps only a part of the geometry. The UVs follow the `uvs` option: each face and the half of the bevels around it are projected on the area of this face. A beveled box uses an indexed geometry.
- **TgdTexture2D.loadWebcam()**: New method that streams the webcam into the texture. It accepts all the standard `MediaTrackConstraints` (`facingMode: "user" | "environment"` to pick the front or back camera, `deviceId`, `width`, `height`, `frameRate`, ...), plus optional `onLoad()` and `onError(error)` callbacks. Calling it again releases the previous camera, and `delete()` turns the camera off. `loadVideo()` now also stops the previous video instead of letting it play in the background.
- **TgdTexture2D.loadBitmap() fix**: The size of a video is now read from `videoWidth` and `videoHeight` instead of `width` and `height`, which are the size of the HTML element and are often `0` when the video is not in the DOM. Images use `naturalWidth` and `naturalHeight` for the same reason. A bitmap with an empty size is now ignored, as canvases already were.

### v2.7.0

- **TgdPainterDeferredShadingTextures.textureEmission**: New `RGBA8` texture, rendered in the same pass as the others, that holds the color of the light emitted by the meshes. It is read from the new optional `emission` texture of `TgdMeshWithTextures["textures"]` (like glTF `emissiveTexture`), or is `(0, 0, 0, 1)` when missing and where nothing has been painted.
- **TgdPainterFilter fix**: The intermediate passes no longer flip the image vertically, so every filter of the chain receives its input with the orientation of the original texture. Filters that read other screen textures with `varUV` (like `TgdFilterDeferredShading` and `TgdFilterGlow`) can now be used at any position in the chain. The final image is unchanged, but a custom filter that relied on the flipped orientation of its input (when it was not the first one) must be updated.
- **TgdPainterFilter fix**: The input texture is no longer used as one of the two ping-pong textures of the intermediate passes, which overwrote it with three filters or more (a static image was destroyed after the first frame). The painter now owns two textures with the format of the input, created at the first intermediate pass (so a single filter allocates nothing) and released by `delete()`. They use `LINEAR` filtering and `CLAMP_TO_EDGE` wrapping, instead of copying the parameters of the input.
- **TgdTexture2D.applyFilter() fix**: The temporary `TgdPainterFilter` and `TgdPainterFramebuffer` are now deleted, so each call no longer leaks a WebGL program, a vertex array and a framebuffer. The filter given as argument still belongs to the caller.
- **New TgdFilterGlow**: Adds a glow (bloom) around the emissive parts of the image, from a `textureEmission` (for instance `TgdPainterDeferredShadingTextures.textureEmission`). The emission is reduced to `scale` times the size of the context (default 0.5), then blurred with Dual Filtering over a chain of `levels` (default 5) half-sized textures, whose weights follow `1, falloff, falloff²…` (default 0.7). `radius` (default 0.05) is the spread as a fraction of the screen height. `threshold` and `knee` (soft threshold) select the bright parts. The result is multiplied by `strength` and `tint` and combined with the input color by `blend` (`"additive"` or `"screen"`). `downsampleFilter` is `"default"` (5 samples of the dual filtering) or `"13-tap"` (Call of Duty: Advanced Warfare kernel with a Karis average on the first pass, more stable for small bright sources). `hdr: true` uses `RGBA16F` intermediate textures. All these options are public fields: changing `levels`, `hdr`, `downsampleFilter` or `textureEmission` rebuilds the passes before the next paint.

### v2.6.0

- **New TgdFilterDeferredShading**: Physically based lighting computed in screen space from the textures of a `TgdPainterDeferredShadingTextures` (given in the `textureNormals`, `textureDepth` and `textureMetallicRoughnessSpecularBakedAO` options), to be used in a `TgdPainterFilter` whose input texture is `textureAlbedo`. It uses the normals, the depth, the metallic, the roughness, the specular and the baked AO. The light comes from a directional `light` (`TgdLight`) and from `skyboxTexture`, used for reflections on metallic surfaces and for global illumination. `skyboxTexture` can be a `TgdTextureCube` or a color (then a 1×1 cube texture is created, released by `filter.delete()`). `skyboxTransfo` orients the skybox, and the skybox light is `skyboxStrength * pow(skyboxTexture.rgb, skyboxExponent)` (defaults 1 and 2.2). These are public fields that can be changed at runtime. Where nothing has been painted, the output is transparent. Set `shading: false` to skip the lighting and only apply `cavity` and `shadow` to the albedo. The three textures are optional: missing ones are replaced by constants in the shader (normal facing the camera, depth 0.5, metallic 0, roughness 0.5, specular 0.5, baked AO 1). `cavity` requires `textureNormals`, otherwise it is disabled with an error in the console.
- **TgdFilterDeferredShadingOptions.shadow**: Applies a shadow in screen space, with the same options as `TgdMaterialShadow` (`camera`, `texture`, `color`, `bias`, `shader`, `inverted`), except `material` and `accuracy`. The bias and the tint can be changed at runtime through `shadowBias` and `shadowColor`. The GLSL code is shared with `TgdMaterialShadow`.
- **New TgdPainterAmbientOcclusionScreenSpace**: Computes Screen Space Ambient Occlusion from the `textureNormals` and `textureDepth` of a `TgdPainterDeferredShading` into `textureAO` (`R32F`), from 0 (fully occluded) to 1 (not occluded). `quality` sets the number of samples per pixel (`"low"`: 8, `"medium"`: 16, `"high"`: 32), `radius` and `bias` can be set in the options and tweaked at runtime through the public fields of the same name. `viewportMatchingScale` (default 1) sets the size of `textureAO` relative to the context, to trade quality for speed. No blur is applied.
- **New TgdPainterDeferredShading**: Paints meshes from the camera of the context into four textures in a single pass, for deferred shading: `textureNormals` (`RGB10_A2`) holds the normals in the camera space, encoded as `N * 0.5 + 0.5`, with alpha at 1 where a mesh has been painted; `textureDepth` (`DEPTH_COMPONENT24`) is the depth buffer itself, holding the (non linear) window depth, to be unprojected with the inverse projection matrix; `textureAlbedo` (`RGBA8`) holds the color computed by the material of each mesh; `textureMetallicRoughnessSpecularBakedAO` (`RGBA8`) holds the material parameters, read from the optional `textures` of each `TgdMeshWithTextures`, in the RED channel unless `metallicChannel`, `roughnessChannel`, `specularChannel` or `bakedAOChannel` says otherwise (a glTF `metallicRoughnessTexture` can be used as is, with `"b"` and `"g"`) (defaults: metallic 0, roughness 0.5, specular 0.5, baked AO 1). Meshes without material (inherited or not) are not painted. The size of the textures follows the size of the context.
- **TgdMeshWithTextures.textures.normals**: A tangent space normal map (like glTF `normalTexture`) that bends the normals written in `textureNormals` of `TgdPainterDeferredShadingTextures`, to simulate bumps on the surface. The TBN basis uses the `attTangent` attribute of the geometry (`bitangent = cross(normal, tangent.xyz) * tangent.w`), or is computed from the screen space derivatives of the position and the UV coordinates if the geometry has no tangents.
- **TgdDataGlb.makeGeometry() and makeDataset()**: They load the `TANGENT` attribute (vec4) when the primitive has one. Its name can be changed with `attTangentName`.
- **New TgdMeshTreeOptions.beforeDraw()**: Called before drawing each mesh, to set uniforms or textures that depend on the mesh.
- **TgdMeshTreeOptions.programKey() and createProgram()**: They also receive the mesh, so a program can depend on it. When the key of a mesh changes, a new program is used for it.
- **New TgdPainterShadow**: Paints the distance of meshes from a light into an `R32F` texture, to be used for shadow mapping. The light is a `TgdCamera`: orthographic for a directional light, perspective for a spot light. The aspect ratio of the texture follows the one of the camera.
- **New TgdMeshTree**: Manages the programs and VAOs needed to paint a tree of `TgdMesh`, and computes the world matrix of each mesh. `update()` reads the tree once per frame, and `forEachBatch()` gives consecutive meshes sharing the same program. `TgdPainterMeshes`, `TgdPainterShadow` and `TgdPainterDeferredShading` are built on it. Use it to write your own mesh painters.
- **New TgdPainterMeshes**: Paints a tree of `TgdMesh`. `children` are painted after their parent, and their `transfo` is local to the parent's one. `visible: false` hides a mesh and all its children. A mesh without `material` uses the one of its closest ancestor. A mesh without `geometry` is not painted, but its children are.
- **TgdMaterial uniMaterial_ScreenSize**: `TgdPainterMesh` and `TgdPainterMeshes` now give every material the `vec2 uniMaterial_ScreenSize` uniform, in both shaders: the width and height, in pixels, of the current render target (canvas, viewport or framebuffer). The `TgdMaterial` TSDoc lists all the uniforms a material gets for free.
- **TgdProgram.hasUniform()**: New method that tells if a uniform is active, i.e. used by the shaders and not removed by the GLSL compiler.
- **TgdTransfo.lookAt()**: New method that orients the transform so its `-Z` axis points to a target, keeping `+Y` as close to up as possible. When looking straight up or down, the current `X` axis is kept to avoid sudden flips. Does nothing if the target is equal to the position.
- **TgdGeometry.attTangent**: New attribute name for the `vec4` tangents, where `w` holds the handedness of the TBN basis (`+1` or `-1`), as in glTF (default `CUSTOM_ATTRIBUTE_3`, like `TgdMaterial.attTangent`). `TgdPainterMesh` declares it in the vertex shader and copies it into the material, so materials can use tangents.
- **TgdMaterialDiffuse**: The `color` option now accepts any `TgdColorType` (CSS string, `TgdColor`, `TgdVec3`/`TgdVec4`, 3 or 4 numbers array) in addition to a `TgdTexture2D`. The new `color` property changes the color after creation. The texture of a material created with a texture cannot be changed: TypeScript rejects the assignment, and at runtime it is ignored with an error in the console.
- **TgdTexture2D.resize() fix**: The storage is now allocated with `null` data instead of uploading an empty canvas, which does not work with every format. The initial 1×1 texture of formats that are neither `FLOAT` nor `UNSIGNED_BYTE` (like `RGB10_A2`) is now zero-filled: it used to fail with `INVALID_OPERATION`, and the error was reported later by an unrelated call.
- **TgdGeometry.make() fix**: The attribute names given in the options are now kept by the geometry. They used to be replaced by the defaults.
- **TgdGeometryPlane fix**: The vertices are now in counter-clockwise order when seen from the normal (`vecX ^ vecY`). The front face used to look in the opposite direction of the normal, so planes disappeared with back-face culling. **Breaking change**: if you used to flip `vecX` or `vecY` to work around this, remove the flip.
- **TgdCamera.matrixProjection fix**: `TgdCameraPerspective` and `TgdCameraOrthographic` used to recompute the projection matrix (and its inverse) at every access. They now only do it when a parameter changes. Changing `zoom` now also invalidates `matrixProjectionInverse`.

### v2.5.0

- **New TgdContextOffscreen**: New class extending `TgdContext` that creates an offscreen WebGL2 context backed by an `OffscreenCanvas`. Its size is automatically synchronized with a parent context on every paint cycle, and its camera transform is kept in sync with the parent's camera. Useful for postprocessing effects and object picking.
- **TgdContext.createProxy()**: New static factory method that wraps a `TgdContext` in a `Proxy`, allowing the same painters to be reused across different actual context instances by transparently delegating all property accesses and method calls to the current delegate.
- **tgdEasingCompose**: New utility function that chains multiple `TgdEasingFunction` values together, feeding the output of each into the next.
- **New easing functions**: Added `tgdEasingFunctionLinearInverse`, `tgdEasingFunctionTriangle`, and `tgdEasingFunctionTriangleInverse`.
- **tgdCalcPixelToIndex**: New math helper that converts a raw `Uint8Array` pixel (R, G, B) directly to an integer index, complementing the existing `tgdCalcRGBToIndex`.

### v2.4.0

- **New TgdPainterBBox**: Painter to visualize a bounding box with configurable wireframe stroke and semi-transparent filled faces. Accepts a `TgdBoundingBox` or `{min, max}` object, with customizable `colorStroke` and `colorFill`.
- **TgdColor constructor expanded**: Now accepts `ArrayNumber3 | TgdVec3` in addition to `ArrayNumber4 | TgdVec4`, making it easier to create colors from RGB triples.
- **TgdBoundingBox constructor expanded**: Now accepts `TgdVec3 | TgdVec4` in addition to `ArrayNumber3` as constructor points.
- **TgdContext.takeSnapshot() fix**: Now triggers a `paint()` call to ensure a frame is rendered before capturing the snapshot.

### v2.3.3

- **TgdContext.takeSnapshot()**: Added an argument to set the mime type quan quality of the generated image.

### v2.3.1

- **webglPresetDepth expanded**: Added `greater`, `greaterOrEqual`, `greaterReadOnly`, and `greaterOrEqualReadOnly` presets to the depth state utility.

### v2.3.0

- **TgdQuat.fromEuler()**: New static factory method to create a quaternion from Euler angles (degrees around X, Y, Z axes).

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
