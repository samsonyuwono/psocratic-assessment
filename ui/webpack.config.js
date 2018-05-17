var HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    outDir = path.resolve(__dirname, 'lib'),
    srcDir = path.resolve(__dirname, 'src');

module.exports = {
    context: srcDir,
    devtool: '#inline-source-map',
    entry: 'index.js',
    module: {
        rules: [
            {
                exclude: /node_modules\/(?!(redux-saga|regenerator-runtime|superagent|webpack)).*/,
                loader: 'babel-loader',
                query: {
                    plugins: [
                        'transform-class-properties',
                        'transform-decorators-legacy',
                        [ 'transform-es2015-template-literals', { spec: true }],
                        'transform-es3-property-literals',
                        'transform-exponentiation-operator',
                        'transform-jscript',
                        'transform-regenerator',
                        'transform-runtime'
                    ],
                    presets: [
                        'stage-0',
                        'es2015',
                        'react'
                    ]
                },
                test: /\.jsx?$/
            }
        ]
    },
    node: {
        __filename: true,
        fs: 'empty'
    },
    output: {
        filename: 'bundle.js',
        path: outDir
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  path.resolve(srcDir, 'index.ejs')
        })
    ],
    resolve: {
        alias: {},
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', srcDir]
    }
}
