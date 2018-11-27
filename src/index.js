import 'font-awesome/scss/font-awesome.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import config from './config';

import authModule from './auth/module';
import searchListModule from './search/list/module';

const appDependencies = [
  'ngRoute'
];

export const DATE_FORMAT_STRING = 'MMM d, y h:mm a';

if (__USE_MOCKS__) {
  console.info('%c____USING FAKE SSO____', 'background: #222; color: #1ff1f5');
}

appDependencies.push(authModule.name);
appDependencies.push(searchListModule.name);

angular.module(`${config.NAMESPACE}`, appDependencies)
  .controller('appCtrl', function() {
    this.appName = config.TITLE;
    return this;
  })
  .constant('DATE_FORMAT_STRING', DATE_FORMAT_STRING)
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({redirectTo: config.LANDING_PAGE_URL});

    // This sets the url mode to html5 clean URLs.
    $locationProvider.html5Mode(true).hashPrefix('!');
  });
