import './style.scss';
import config from './config';
import component from './component';

import angularMoment from 'angular-moment';
import giphyApiModule from './../../giphy/api/module';
import collectionsApiModule from './../../collections/api/module';
import savedCardModule from './../../saved/card/module';

export default angular.module(`${config.NAMESPACE}`, [
  'ngRoute',
  'angularMoment',
  'mgcrea.ngStrap.tooltip',
  giphyApiModule.name,
  collectionsApiModule.name,
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
