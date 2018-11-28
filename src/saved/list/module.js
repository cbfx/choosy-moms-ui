import './style.scss';
import config from './config';
import component from './component';

import angularMoment from 'angular-moment';
import savedApiModule from './../api/module';
import savedCardModule from './../../saved/card/module';

export default angular.module(`${config.NAMESPACE}`, [
  'ngRoute',
  'angularMoment',
  'mgcrea.ngStrap.tooltip',
  savedApiModule.name,
  savedCardModule.name
])
  .component(config.COMPONENT_NAME, component)
  .config(function($routeProvider) {
    $routeProvider
      .when(`${config.ROUTE.href}`, {
        template: `${config.COMPONENT_TAG}`,
        title: `${config.TITLE}`,
        reloadOnSearch: false
      });
  });
