const path = require("path")
// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackManifestPlugin = require("webpack-manifest-plugin")

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html"),
            filename: "index.html"
        }),
        new WebpackManifestPlugin()
    ],
    devServer: {
        contentBase: "./dist",
        open: true,
        hot: true,
        inline: true
    }
}