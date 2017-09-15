const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: "./Src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "coverride.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "Src")
            ],
            loader: "babel-loader"
        }]
    },
    plugins: [
        new UglifyJSPlugin({
            output: {
                beautify: true
            }
        })
    ],
    watch: true
}