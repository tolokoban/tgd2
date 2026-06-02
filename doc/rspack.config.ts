import FS from "node:fs";
import Path from "node:path";
import { execSync } from "node:child_process";
import * as Rspack from "@rspack/core";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import highlightJs from "highlight.js";
import rehypeHighlight from "rehype-highlight";
import rehypeHighlightCodeLines from "rehype-highlight-code-lines";
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";
import Package from "./package.json" with { type: "json" };

const __dirname = Path.dirname(new URL(import.meta.url).pathname);

const pkg = Package as typeof Package & { port: number };

if (typeof pkg.port !== "number") {
	pkg.port = 1204 + Math.floor(Math.random() * (0xffff - 1024));
	FS.writeFileSync(
		Path.resolve(__dirname, "package.json"),
		JSON.stringify(pkg, null, "    "),
	);
	console.log("A random port has been set for dev server:", pkg.port);
}

export default function (
	env: Record<string, string | undefined>,
	argv: Record<string, unknown>,
): Rspack.Configuration {
	const isProdMode = argv.mode === "production";
	if (isProdMode) {
		console.log("+------------+");
		console.log("| PRODUCTION |");
		console.log("+------------+");
	} else {
		console.log("+-------------+");
		console.log("| DEVELOPMENT |");
		console.log("+-------------+");
	}

	return {
		cache: false,
		lazyCompilation: false,
		output: {
			filename: "scr/[name].[contenthash].js",
			path: Path.resolve(__dirname, "build"),
			devtoolModuleFilenameTemplate: "[absolute-resource-path]",
		},
		watchOptions: {
			aggregateTimeout: 600,
		},
		entry: {
			app: "./src/index.tsx",
		},
		target: "web",
		resolve: {
			extensions: [".tsx", ".ts", ".js", ".jsx", ".wasm"],
			enforceExtension: false,
			alias: {
				"@": Path.resolve(__dirname, "src/"),
			},
		},
		devtool: isProdMode ? false : "inline-source-map",
		devServer: {
			compress: true,
			historyApiFallback: true,
			static: {
				directory: Path.resolve(__dirname, "./public"),
			},
			client: {
				logging: "none",
				overlay: { errors: false, warnings: false },
				progress: true,
			},
			hot: true,
			open: true,
			host: "0.0.0.0",
			port: env.PORT ? Number.parseInt(env.PORT, 10) : pkg.port,
			server: "http",
		},
		stats: {
			children: true,
			colors: true,
			errorDetails: false,
		},
		plugins: [
			new Rspack.ProgressPlugin(),
			{
				apply(compiler) {
					compiler.hooks.beforeCompile.tapAsync(
						"GeneratePlugin",
						(_params: unknown, done: () => void) => {
							execSync("npm run generate", { stdio: "inherit" });
							done();
						},
					);
				},
			} as Rspack.RspackPluginInstance,
			new CleanWebpackPlugin({
				cleanStaleWebpackAssets: false,
			}),
			new Rspack.CopyRspackPlugin({
				patterns: [
					{
						from: "./*",
						context: Path.resolve(__dirname, "public"),
						globOptions: {
							ignore: ["**/index.html"],
						},
					},
				],
			}),
			new Rspack.HtmlRspackPlugin({
				template: "public/index.html",
				filename: "index.html",
				templateParameters: {
					version: Package.version,
					title: "Tolokoban",
				},
				minify: false,
			}),
			new Rspack.CssExtractRspackPlugin(),
		],
		performance: {
			hints: "warning",
			maxAssetSize: 300000,
			maxEntrypointSize: 200000,
			assetFilter: (filename: string) => {
				if (filename.endsWith(".png")) return false;
				if (filename.endsWith(".map")) return false;
				return true;
			},
		},
		optimization: {
			splitChunks: {
				chunks: "all",
				cacheGroups: {
					defaultVendors: {
						test: /[\\/]node_modules[\\/]/,
						priority: -10,
						reuseExistingChunk: true,
					},
					default: {
						minChunks: 2,
						priority: -20,
						reuseExistingChunk: true,
					},
				},
			},
			moduleIds: "deterministic",
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: [
						{
							loader: "builtin:swc-loader",
							options: {
								jsc: {
									parser: {
										syntax: "typescript",
										tsx: true,
									},
									transform: {
										react: {
											runtime: "automatic",
										},
									},
								},
							},
						},
					],
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
					test: /\.(bin|glb|dat|swc|zip)$/i,
					type: "asset",
					generator: {
						filename: "bin/[name].[hash][ext][query]",
					},
				},
				{
					test: /\.(eot|ttf|woff|woff2)$/i,
					type: "asset/resource",
					generator: {
						filename: "fnt/[name].[hash][ext][query]",
					},
				},
				{
					test: /\.(vert|frag|obj)$/i,
					type: "asset/source",
				},
				{
					test: /\.(py|txt|sh|md)$/i,
					type: "asset/source",
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
									localIdentName: isProdMode
										? "[hash:base64]"
										: "[path][name]_[local]_[hash:base64:6]",
								},
							},
						},
					],
				},
				{
					test: /\.mdx?$/,
					use: [
						{ loader: "builtin:swc-loader", options: {} },
						{
							loader: "@mdx-js/loader",
							options: {
								rehypePlugins: [
									[
										rehypeHighlight,
										{
											languages: {
												ts: () => highlightJs.getLanguage("ts"),
												glsl: () => highlightJs.getLanguage("glsl"),
											},
										},
									],
									rehypeHighlightCodeLines,
								],
								remarkPlugins: [remarkImages, remarkEmoji, remarkGfm],
								providerImportSource: "@mdx-js/react",
							},
						},
					],
				},
			],
		},
	};
}
