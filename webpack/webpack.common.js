const webpack = require('webpack');
const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let DEV = process.env.NODE_ENV === 'development';

module.exports = {
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                        loader: 'ng-annotate-loader'
                    },
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.(jade|pug)$/,
                use: 'pug-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*$|$)/,
                loader: `file-loader?name=assets/[name]${DEV ? '' : '.[hash]'}.[ext]`
            },
            {
                test: require.resolve('snapsvg'),
                loader: 'imports-loader?this=>window,fix=>module.exports=0'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug'
        }),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};