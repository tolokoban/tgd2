# CLAUDE.md

`@tolokoban/tgd` ("ToloGameDev"): a TypeScript helper library for **WebGL2**, published on npm,
with its documentation/test application. The single author works on it as Tolokoban.

Before writing code, read the style guide of the folder you are working in:

- [`lib/STYLE.md`](lib/STYLE.md): the library. **Painters live in `lib/src/painter/`.**
- [`doc/STYLE.md`](doc/STYLE.md): the documentation site, which also serves as the manual test app.

## Repository layout

| Folder        | Content                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------- |
| `lib/`        | The library (`lib/src` → `lib/dist`). Alias `@tgd/*` → `lib/src/*`.                       |
| `doc/`        | React + MDX site with live demos. Uses the library through `"@tolokoban/tgd": "file:.."`. |
| `tst/`        | Visual anti-regression app (Tauri): renders test cases and compares to `references/`.     |
| `@templates/` | Code-generation templates (`demo`, `page`, `Component`).                                  |
| `blender/`, `papers/` | Assets and reference material.                                                    |

The root `package.json` is the one published (`files: ["./lib/dist"]`).

## Commands

```bash
# Development: two terminals
cd lib && npm start          # watch build of the library
cd doc && npm start          # dev server for the docs/demos

cd doc && npm run generate   # regenerate routes.ts and demo index.tsx files after adding pages/demos
cd lib && npm test           # Jest (math/utils only, no WebGL)
cd lib && npm run lint
npm run format               # oxfmt on lib/ and doc/
npm run patch | npm run minor  # bump the version everywhere (version.mjs syncs lib, lib/src, doc, tst, lib/src/version.ts)
```

## How the author works

- **Feature first, then a demo.** A new library feature (painter, material, util) comes with a page and a
  live demo in `doc/` that uses it through the public `@tolokoban/tgd` import. The demo is the real test
  of rendering code. Jest only covers pure math/utils.
- **Typical "new painter" checklist:**
  1. `lib/src/painter/<name>/<name>.ts` + `index.ts`. **Shaders are always written with
     `TgdPainterProgram`** (no new `.vert.ts` / `.frag.ts` files, no hand-built `TgdProgram` + VAO).
  2. `export * from "./<name>"` in `lib/src/painter/index.ts` (alphabetical).
  3. TSDoc on the class and its `TgdPainter<Name>Options`. TypeDoc generates the API pages.
  4. `doc/src/app/articles/painter/<name>/page.mdx` + `_<name>/<name>.demo.tsx`, then `npm run generate` in `doc/`.
     Every demo must show its code with the "Show full code" button: the page imports the **folder**
     (`import Demo from "./_<name>"`, i.e. the generated `index.tsx`), never `./_<name>/<name>.demo` directly.
  5. Add a bullet to `doc/src/app/articles/painter/page.mdx`.
     In demos, avoid inner functions (closures inside `init`): write helpers as top-level functions at the
     end of the file, each wrapped in `// #begin <name>()` … `// #end`, and pass them what they need as
     arguments. When a UI control must rebuild painters, keep the context and shared objects in React refs
     in `Demo()` and call the helper from the handler.
  6. Add a release note in `README.md`.
- **Examples (`doc/src/app/example/<name>/`) are not demos.** They show a **fullscreen** canvas with no
  code viewer, like `example/retro-futuristic-screen`: a `page.tsx` that renders the component from a
  sibling `<name>.tsx` (not `.demo.tsx`, no `_<name>/` folder), which returns `<View fullscreen onReady={init} />`.
  Link them from the list in `doc/src/app/articles/page.mdx`.
- **Release notes** go in the root `README.md` under `## Release notes`, newest version first:
  `### vX.Y.Z` followed by bullets like `- **TgdThing.method()**: what changed and why it matters.`
  New classes are introduced as `**New TgdXxx**: …`, fixes as `**TgdXxx.method() fix**: …`.
- **Versioning**: new feature → minor, fix → patch. Run `npm run minor` / `npm run patch`; never edit
  versions by hand.
- **Commits** are short, imperative or descriptive, with no conventional-commit prefix
  (`Added TgdQuat.fromEuler() static function`, `Fix resolution`). Release commits are just `vX.Y.Z`.
  Only commit when asked.
- **API style**: everything public is prefixed (`Tgd…` classes and types, `tgd…` functions). The context is
  always the first constructor argument, and options come as an object in the second.
  Mutable things are public fields. Users can tweak them at runtime.
- **Breaking changes are acceptable but must be documented** in the release notes (e.g. the v2.1.2 note
  about `TgdCamera.fitBoundingBox`).
- Code, comments and docs are written in **English**.
- `🐞 … // @FIXME: Remove this line written on …` console logs are the author's temporary debug traces.
  Report any you find in `lib/`. Don't delete them on your own, and don't write new ones.

## Gotchas

- Do not hand-edit generated files: `doc/src/app/routes.ts`, `doc/src/app/types.ts`, demo `index.tsx`
  files marked "generated automatically", `doc/public/docs/`, `lib/src/version.ts`, `lib/src/package.json`.
- `lib/` uses **4 spaces**, while `doc/` mostly uses **tabs** (Biome). Neither uses semicolons in `lib/`.
  Match the surrounding file.
- `doc` depends on the **built** library (`lib/dist`). If a new export is "not found" in a demo, rebuild `lib/`.
- Every GPU resource created by a painter must be released in its `delete()`.
- **Never delete a resource you have not created yourself.** If a class (material, painter, filter...) receives a
  resource (e.g. a `TgdTexture2D` in its options), its `delete()` must not delete it. If the resource is optional
  and the class creates a default one, the class owns that default and must delete it. Track this with a private
  flag set in the constructor, e.g. `private readonly textureFoobarHasToBeDeleted: boolean`, checked in `delete()`.
- `paint(time, delta)` receives **seconds**.
