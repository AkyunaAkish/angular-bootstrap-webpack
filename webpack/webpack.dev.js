let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let helpers = require('./helpers.js');
let ProgressBarPlugin = require('progress-bar-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let WebpackNotifierPlugin = require('webpack-notifier');
let commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    entry: {
        'app': [
            'webpack-dev-server/client?http://localhost:8080',
            './src/client/app.js'
        ]
    },
    devtool: 'eval',
    output: {
        path: helpers.root('bundle'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new WebpackNotifierPlugin({
            alwaysNotify: true
        })
    ]
});
