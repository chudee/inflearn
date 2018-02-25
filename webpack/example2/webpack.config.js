var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        main: './app/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        // Not Serported
        // new ManifestPlugin({
        //     fileName: 'manifest.json',
        //     basePath: './dist/'
        // })
    ]
}