var webpack = require('webpack'),
    webpackProduction = require('./webpack.base.config.js')('vendor.js', null, 'app.css'),
    uglifyJsOptions = {mangle: false};

webpackProduction.storeStatsTo = 'webpackStatistics';
webpackProduction.plugins.push(new webpack.optimize.UglifyJsPlugin(uglifyJsOptions));
webpackProduction.devServer.quiet = true;
webpackProduction.devServer.noInfo = true;

module.exports = webpackProduction;
