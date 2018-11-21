if (!global._babelPolyfill) {
  require('babel-polyfill');
}
require('./detect.js')();
require('angular');

if (__USE_MOCKS__) {
  console.info('%c____INCLUDING MOCKS____', 'background: #222; color: #1ff1f5;');
  require('angular-mocks'); // Only for mocks
}

require('angular-route/angular-route.min.js');
require('angular-moment/angular-moment.min.js');
require('angular-jwt/dist/angular-jwt.min.js');
require('angular-resource/angular-resource.min.js');
require('angular-sanitize/angular-sanitize.min.js');
require('angular-storage/dist/angular-storage.min.js');
require('angular-strap/dist/angular-strap.min.js');
require('angular-strap/dist/angular-strap.tpl.min.js');
require('angular-formly/dist/formly.min.js');
require('angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js');
