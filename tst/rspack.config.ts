import Path from "path"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import * as Rspack from "@rspack/core"
import path from "path"

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default function (
    env: Record<string, string | undefined>,
    argv: Record<string, unknown>
): Rspack.Configuration {
    const isProdMode = process.env.NODE_ENV === "production"

    return {
        output: {
            filename: "js/[name].js",
            path: Path.resolve(__dirname, "build"),
        },
        entry: {
            app: "./src/index.ts",
        },
        target: "node-webkit",
        resolve: {
            extensions: [".ts", ".js"],
            alias: {
                "@": Path.resolve(__dirname, "src/"),
            },
        },
        devtool: isProdMode ? false : "inline-source-map",
        plugins: [
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: false,
            }),
            new Rspack.CopyRspackPlugin({
                patterns: [
                    {
                        from: "public/**/*",
                        context: Path.resolve(__dirname, "public"),
                    },
                ],
            }),
            new Rspack.HtmlRspackPlugin({
                template: "public/index.html",
                filename: "index.html",
                minify: isProdMode,
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                transpileOnly: false,
                            },
                        },
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: Rspack.CssExtractRspackPlugin.loader,
                        },
                        {
                            loader: "css-loader",
                        },
                    ],
                },
            ],
        },
    }
}
