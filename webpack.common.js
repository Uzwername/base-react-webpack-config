const fs = require("fs");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const styleLintPlugin = require("stylelint-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

//Returns full name of a first file in a given folder.
const returnFirstFile = folderPath => 
    fs.readdirSync(folderPath)
        .filter(item => !(/(^|\/)\.[^\/\.]/g)
        .test(item))[0];

//Full favicon path
const faviconPath = "./assets/favicon/" +
                    returnFirstFile("./assets/favicon/");

imagemin(["assets/images/common/*.{jpg,png}"], "assets/images/webp", {
    use: [
        imageminWebp({quality: 50})
    ]
}).catch( err => console.log(`Image optimization failed due to: ${err}`) );

module.exports = {
    entry: {
        main: "./src/index/scripts/index.js"
    },
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, `dist`)
	},
    resolve: {
        alias: {
            IndexScripts: path.resolve(__dirname, `src/index/scripts`),
            IndexComponents: path.resolve(__dirname, `src/index/scripts/components`),
            IndexContainers: path.resolve(__dirname, `src/index/scripts/containers`),
            IndexStyles: path.resolve(__dirname, `src/index/styles`),
            Images: path.resolve(__dirname, `assets/images`)
        }
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { //Enables class/id minimization & CSS modules
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[sha1:hash:hex:4]"
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [require("autoprefixer")({
                                "browsers": ["cover 99.5% in ES"]
                            })],
                        }
                    },
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
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
                            ]
                        }
                    },
                    {
                        loader: "eslint-loader",
                        options: {
                            //Prevents eslint from ruining a build on error.
                            emitWarning: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif|webp)$/,
                include: [
                    path.resolve(__dirname, "assets")
                ],
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: "65-90",
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ],
    },
    plugins: [

        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/
        }),

        new FaviconsWebpackPlugin({
            logo: faviconPath,
            prefix: "icons/",
            title: "Base Settings",
            background: "#FFF",
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        }),

        new styleLintPlugin({
            configFile: "stylelint.config.js",
            syntax: "scss",
            context: "src",
            files: "**/*.scss",
            failOnError: false,
            quiet: false,
            emitErrors: false
        })
    ]
};