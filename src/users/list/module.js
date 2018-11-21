import config from './config';
import component from './component';

import angularMoment from 'angular-moment';

export default angular.module(`${config.NAMESPACE}`, [
  'ngRoute',
  'angularMoment',
  'mgcrea.ngStrap.tooltip'
])
  .component(config.COMPONENT_NAME, component)
  .config(function($routeProvider) {
    $routeProvider
      .when(`${config.ROUTE.href}`, {
        template: `${config.COMPONENT_TAG}`,
        title: `${config.TITLE}`
      });
  });
