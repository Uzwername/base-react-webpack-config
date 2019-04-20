const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    //Used primarily to delete comments from prod build
    optimization: {
        minimizer: [ 
            new UglifyJsPlugin({
                uglifyOptions: {
                  output: {
                    comments: false
                  }
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
            template: "./src/markup/index_template.prod.html"
        })
    ]
});
