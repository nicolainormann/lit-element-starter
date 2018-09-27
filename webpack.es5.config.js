const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");


module.exports = {
    mode: "production",
    entry: "./dist/js/main.js",
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "js/main.es5.js"
    },
    plugins: [
        new CopyWebpackPlugin([{
                from: "./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
                to: "js/3rdparty"
            },
            {
                from: "./node_modules/@webcomponents/webcomponentsjs/bundles",
                to: "js/3rdparty/bundles"
            },
            {
                from: "./node_modules/@babel/polyfill/dist/polyfill.js",
                to: "js/3rdparty"
            }
        ]),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.es5.html"
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ["css/main.css", "js/3rdparty/polyfill.js", "js/3rdparty/webcomponents-loader.js"],
            append: false
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }]
    }
};