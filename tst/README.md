# Anti-regression visual tests for @tolokoban/tgd

This is an electron application that generates images with @tolokoban/tgd library,
and compare them with references to see if there is a regression.

We use "rspack" as bundler.

The main directories are:

- `references`: Contain images in WEBP format at 50% of quality. Each image as the same name of the folder in `src/front/cases` that was used to generate it.
- `src/front`: Typescript sources for the UI of the application. Uses React and the local @tolokoban/tgd library from `file:..`.
- `src/front/cases`: Contain subfolders that are all the test cases. Each folder contains an `index.ts` file that must export a default constant of type `TestCase` (defined later in this document).
- `src/back`: All the Electron code that uses NodeJS. Provides functions to read/write WEBP images in folder `references`.
Plus a function to compare an generated image with an image from `reference/`. If the image in `reference/` does not exist, the generated image is stored in `reference` and the function returns "NEW". If the generated image is the same as the reference one, return "SAME", otherwise return "DIFF".

```ts
interface TestCase {
    /**
     * Label of this test case
     */
    label: string
    /**
     * The application will call `exec` or each test case with the context of a small canvas.
     * `exec()` should return a painting function. The application will call this function,
     * then wait for the WebGL pipeline to be done. Then it will get the image from this context
     * and compare it with a reference stored in `references/`.
     */
    exec(context: TgdContext): Promise<() => void>
}
```

## Setup

First, make sure the library is built:

```bash
cd ../lib
npm install
npm run build
```

Then install the test project dependencies:

```bash
cd ../tst
npm install
```

## Development

You need three terminals (or use the single `dev` script).

**Option A — Single command:**

```bash
npm run dev
```

This starts the rspack dev server, watches the back-end TypeScript, and launches Electron.

**Option B — Manual terminals:**

1. Build and watch the Electron main process:
   ```bash
   npm run dev:back
   ```
2. Start the rspack dev server for the renderer:
   ```bash
   npm run dev:front
   ```
3. Once the dev server is ready (port 9321), launch Electron:
   ```bash
   npm run start
   ```

### Adding a test case

Create a new folder under `src/front/cases/<test-name>/` with an `index.ts` that default-exports a `TestCase`:

```ts
import { TestCase } from "../../types"

const testCase: TestCase = {
    label: "My Test",
    async exec(context) {
        return () => {
            // Use context.gl to draw something
        }
    },
}

export default testCase
```

Then register it in `src/front/cases.ts`.
