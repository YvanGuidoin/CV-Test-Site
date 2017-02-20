const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    cache: true,
    devtool: 'eval',
    entry: {
        main: './app/main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js',
        pathinfo: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                        loader: 'babel-loader',
                        options: {
                            "presets": ["es2015"]
                        }
                    },
                    {
                        loader: 'ts-loader'
                    },
                    {
                        loader: 'angular2-template-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "raw-loader"
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            comments: false,
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
                pure_getters: true,
                drop_debugger: true,
                conditionals: true,
                evaluate: true,
                drop_console: true,
                sequences: true,
                unsafe: true,
                unsafe_comps: true,
                booleans: true
            },
            output: {
                comments: false,
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './app/index.html',
            favicon: './app/favicon.ico'
        })
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}
