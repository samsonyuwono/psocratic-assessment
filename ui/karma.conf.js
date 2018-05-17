var karmaMocha = require('karma-mocha'),
    karmaPhantomJS = require('karma-phantomjs-launcher'),
    karmaWebpack = require('karma-webpack'),
    path = require('path'),
    webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        beforeMiddleware: [ 'webpackBlocker' ],
        browsers: [ 'PhantomJS' ],
        browserConsoleLogOptions: {
            level: 'debug',
            format: '%b %T: %m',
            terminal: true
        },
        client: {
            captureConsole: true
        },
        files: [
            path.join(__dirname, 'lib/bundle.js'),
            path.join(__dirname, 'test/**/*.js')
        ],
        frameworks: [ 'mocha' ],
        plugins: [
            karmaMocha,
            karmaPhantomJS,
            karmaWebpack
        ],
        preprocessors: {
            'test/**/*.js': ['webpack']
        },
        webpack: Object.assign({}, webpackConfig, {
            devtool: '#inline-source-map'
        })
    });
}
