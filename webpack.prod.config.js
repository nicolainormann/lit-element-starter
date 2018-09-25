const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = [{
    mode: "production",
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
        }),
        new CopyWebpackPlugin([{
            from: "./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
            to: "js/3rdparty"
        }])
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
}, {
    mode: "production",
    entry: ["./dist/js/main.js"],
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "js/main.es5.js"
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: "./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
            to: "js/3rdparty"
        }, {
            from: "./node_modules/@babel/polyfill/dist/polyfill.js",
            to: "js/3rdparty"
        }])
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    }
}];