const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    // Automatically compile when files change.
    watch: true,
    // Automatically reload the page when compilation is done.
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
    plugins:[
        new HtmlWebpackPlugin({
            "meta": {
                "charset": {
                    "charset": "utf-8"
                },
                "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no"
            },
            template: "src/index/markup/index_template.dev.html"
        })
    ]
});