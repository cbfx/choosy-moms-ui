import 'font-awesome/scss/font-awesome.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import config from './config';

import eventsCreateModule from './events/create/module';
import eventsDetailModule from './events/detail/module';
import eventsEditModule from './events/edit/module';
import eventsDeleteModule from './events/delete/module';
import eventsListModule from './events/list/module';
import eventsFaceModule from './events/face/module';

import surveysCreateModule from './surveys/create/module';
import surveysPreviewModule from './surveys/preview/module';

const appDependencies = [
  'ngRoute'
];

export const DATE_FORMAT_STRING = 'MMM d, y h:mm a';

if (__USE_MOCKS__) {
  console.info('%c____USING FAKE SSO____', 'background: #222; color: #1ff1f5');
}

appDependencies.push(eventsCreateModule.name);
appDependencies.push(eventsDetailModule.name);
appDependencies.push(eventsEditModule.name);
appDependencies.push(eventsDeleteModule.name);
appDependencies.push(eventsListModule.name);
appDependencies.push(eventsFaceModule.name);

appDependencies.push(surveysCreateModule.name);
appDependencies.push(surveysPreviewModule.name);

angular.module(`${config.NAMESPACE}`, appDependencies)
  .controller('appCtrl', function() {})
  .constant('DATE_FORMAT_STRING', DATE_FORMAT_STRING)
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({redirectTo: config.LANDING_PAGE_URL});

    // This sets the url mode to html5 clean URLs.
    $locationProvider.html5Mode(true).hashPrefix('!');
  });
