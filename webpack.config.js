var webpackConfig = require('./webpack.base.config.js')('vendor.js', 'app.js', 'app.css');

// TODO: reenable
// Add coverage when testing
// webpackConfig.module.postLoaders.push(
//   {
//     test: /.*\.js$/,
//     exclude: /(.*tests.*.js|.*spec.js|.*mock.js|node_modules)/,
//     loader: 'istanbul-instrumenter'
//   }
// );

module.exports = webpackConfig;
