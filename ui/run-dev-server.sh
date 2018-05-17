#!/usr/bin/env node
var express = require('express'),
    path = require('path'),
    webpack = require('webpack'),
    webpackConfig = require(path.resolve(__dirname, 'webpack.config.js')),
    webpackDevMiddleware = require('webpack-dev-middleware');

var app = express(),
    compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: "/"
}));

app.listen(3000, function () {
    console.log("Listening on port 3000");
});
