const Path = require("path")
const CircularDependencyPlugin = require("circular-dependency-plugin")

module.exports = {
    cache: false,
    entry: "./src/index.ts",
    // mode: "production",
    // mode: "development",
    devtool: "source-map",
    experiments: {
        outputModule: true,
    },
    output: {
        path: Path.resolve(__dirname, "./dist"),
        filename: "index.js",
        library: {
            type: "module",
        },
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: ["ts-loader"],
            },
            {
                test: /\.(vert|frag)$/i,
                // More information here https://webpack.js.org/guides/asset-modules/
                type: "asset/source",
            },
        ],
    },
    resolve: {
        extensions: [".ts"],
        enforceExtension: false,
        alias: {
            "@": Path.resolve(__dirname, "src/"),
        },
    },
    plugins: [
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /a\.js|node_modules/,
            // include specific files based on a RegExp
            // include: /dir/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // allow import cycles that include an asyncronous import,
            // e.g. via import(/* webpackMode: "weak" */ './file.js')
            allowAsyncCycles: false,
            // set the current working directory for displaying module paths
            cwd: process.cwd(),
        }),
    ],
}
