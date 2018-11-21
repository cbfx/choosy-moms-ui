import config from './config';
import component from './component';

import eventsApiModule from './../api/module';
import eventsActionButtonGroupModule from './../action-button-group/module';
import eventsStatusModule from './../status/module';

export default angular.module(`${config.NAMESPACE}`, [
  'ngRoute',
  eventsApiModule.name,
  eventsActionButtonGroupModule.name,
  eventsStatusModule.name
])
  .component(config.COMPONENT_NAME, component)
  .config(function($routeProvider) {
    $routeProvider
      .when(`${config.ROUTE.href}`, {
        template: `${config.COMPONENT_TAG}`,
        title: `${config.TITLE}`
      });
  });
