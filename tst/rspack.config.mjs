import Path from "node:path"
import * as Rspack from "@rspack/core"

const __dirname = Path.dirname(new URL(import.meta.url).pathname)

/** @param {Record<string, unknown>} _env @param {Record<string, unknown>} argv */
export default function (_env, argv) {
    const isProd = argv.mode === "production"
    return /** @type {Rspack.Configuration} */ ({
        entry: "./src/front/index.tsx",
        target: "web",
        output: {
            filename: "renderer.js",
            path: Path.resolve(__dirname, "dist/front"),
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: { "@": Path.resolve(__dirname, "src/front/") },
        },
        devtool: isProd ? false : "inline-source-map",
        devServer: {
            port: 9321,
            hot: true,
            static: { directory: Path.resolve(__dirname, "public") },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [{ loader: "ts-loader", options: { transpileOnly: true } }],
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [Rspack.CssExtractRspackPlugin.loader, "css-loader"],
                },
            ],
        },
        plugins: [
            new Rspack.HtmlRspackPlugin({
                template: "public/index.html",
            }),
            new Rspack.CssExtractRspackPlugin(),
        ],
    })
}
