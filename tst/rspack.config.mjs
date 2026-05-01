import Path from "node:path"
import * as Rspack from "@rspack/core"
import { execSync } from "node:child_process"

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
                    test: /\.(png|jpe?g|gif|webp|avif|svg|mp4|webm)$/i,
                    type: "asset",
                    generator: {
                        filename: "img/[name].[hash][ext][query]",
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: Rspack.CssExtractRspackPlugin.loader,
                            options: {
                                filename: "css/[name].css",
                                enforceRelative: true,
                            },
                        },
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    auto: true,
                                    namedExport: false,
                                    localIdentName: "[path][name]_[local]_[hash:base64:6]",
                                },
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            {
                apply(compiler) {
                    compiler.hooks.beforeCompile.tap("BuildRoutes", () => {
                        execSync("npm run usecases && npm run routes", { stdio: "inherit" })
                    })
                },
            },
            new Rspack.HtmlRspackPlugin({
                template: "public/index.html",
            }),
            new Rspack.CssExtractRspackPlugin(),
        ],
    })
}
