'use strict';

const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {

    context: `${__dirname}/src/`,

    entry: {
        africa: './africa.js'
    },

    output: {
        path: `${__dirname}/dist/`,
        filename: '[name].js',
        library: 'Africa',
        libraryTarget: 'umd',
        sourceMapFilename: '[file].map',
        devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string
        devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string
        umdNamedDefine: true,
    },

    plugins: [

        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        }),

        new WebpackShellPlugin({
            onBuildStart: 'node node-checksum.js',
            onBuildEnd: 'node copy-to-examples.js'
        })

    ],

    devtool: 'inline-source-map'

};
