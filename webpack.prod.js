const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
           {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [ //Uses polyfills
                                    "@babel/preset-env",
                                    {
                                        useBuiltIns: "usage",
                                        corejs: {
                                          // Forces usage of last version
                                          version: 3,
                                          // Enables polyfills for proposals
                                          proposals: true,
                                        },
                                    }
                                ]
                            ],
                            configFile: path.resolve(
                                path.resolve(
                                    __dirname,
                                    `babel.config.prod.js`,
                                ),
                            ),
                        }
                    },
                    {
                        loader: "eslint-loader",
                        options: {
                            //Corrects the path to formatter (https://github.com/eslint/eslint/issues/11910)
                            formatter: require(path.resolve(__dirname, `node_modules/eslint/lib/cli-engine/formatters/stylish`)),
                            //Prevents eslint from ruining a build on error.
                            emitWarning: true
                        }
                    }
                ]
            },
        ]
    },
    //Used primarily to delete comments from prod build
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    warnings: false
                }
            })
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            "meta": {
                "charset": {
                    "charset": "utf-8"
                },
                "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no"
            },
            template: "src/index/markup/index_template.prod.html"
        })
    ]
});
