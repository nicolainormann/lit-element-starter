const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    watch: true,
    devtool: "source-map",
    entry: "./src/elements/index.ts",
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "js/main.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/main.css"
        })
    ],
    module: {
        rules: [{
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            sourceMap: true,
                            plugins: [
                                autoprefixer()
                            ]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
};