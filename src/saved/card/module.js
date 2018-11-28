import './style.scss';

import config from './config';
import component from './component';

import savedApiModule from './../api/module';
import collectionsCardModule from './../../collections/card/module';

export default angular.module(`${config.NAMESPACE}`, [
  'mgcrea.ngStrap.popover',
  savedApiModule.name,
  collectionsCardModule.name
])
  .component(config.COMPONENT_NAME, component);
