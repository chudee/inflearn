var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        build: './src/main.js',
        vendor: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            name: "vendor",
            chunks: "all"
        }
    }
}