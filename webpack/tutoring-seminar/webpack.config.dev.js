var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        build: './src/main.js',
        vendor: ['jquery']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        // filename: '[name].[chunkhash].js' // manifest.json 설정을 따로 해줘서 hash값을 잡아야합니ㅏㄷ.
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
    },

    devtool: '#inline-source-map'
}