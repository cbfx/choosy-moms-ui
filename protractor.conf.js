let protractorConfigOverrides = {};
let protractorSettings = {
  waitForPathPattern: /portals/,
  chromeOptions: {
    args: []
  },
  projectSrcDir: __dirname + '/src'
};
let ProtractorConf = require('juno-ui-common/protractor.conf.js')(protractorConfigOverrides, protractorSettings);

module.exports = ProtractorConf;
