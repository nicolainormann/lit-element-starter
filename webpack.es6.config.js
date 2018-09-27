const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
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
        }),
        new CopyWebpackPlugin([{
                from: "./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
                to: "js/3rdparty"
            },
            {
                from: "./node_modules/@webcomponents/webcomponentsjs/bundles",
                to: "js/3rdparty/bundles"
            }
        ]),
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ["js/3rdparty/webcomponents-loader.js"],
            append: false
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
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [
                                autoprefixer()
                            ]
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    }
};