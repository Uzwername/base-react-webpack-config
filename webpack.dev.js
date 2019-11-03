const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    // Automatically compile when files change.
    watch: true,
    // Automatically reload the page when compilation is done.
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
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
                                        "corejs": "core-js@3"
                                    }
                                ]
                            ],
                            configFile: path.resolve(
                                path.resolve(
                                    __dirname,
                                    `babel.config.dev.js`
                                )
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
    plugins: [

        new HtmlWebpackPlugin({
            "meta": {
                "charset": {
                    "charset": "utf-8"
                },
                "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no"
            },
            template: "src/index/markup/index_template.dev.html"
        }),

        new StylelintPlugin({
            configFile: "stylelint.config.js",
            syntax: "scss",
            context: "src",
            files: "**/*.scss",
            failOnError: false,
            quiet: false,
            emitErrors: false,
            emitWarning: true,
        }),

    ]

});
