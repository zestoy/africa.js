'use strict';

const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    context: `${__dirname}/src/`,

    entry: {
        africa: './africa.js',
        'africa.min': './africa.js'
    },

    output: {
        path: `${__dirname}/dist/`,
        filename: '[name].js',
        library: 'Africa',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    plugins: [

        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        }),

        new UglifyJSPlugin({
            include: /\.min\.js$/,
            parallel: true,
            sourceMap: false,
            compress: true,
            comments: false,
            uglifyOptions: {
                ie8: false,
                ecma: 5,
                warnings: false
            },
            warningsFilter: (src) => false
        }),

        new WebpackShellPlugin({
            onBuildStart: 'node node-checksum.js'
        })

    ]

};
