import './style.scss';

import config from './config';
import component from './component';

import savedApiModule from './../api/module';

export default angular.module(`${config.NAMESPACE}`, [
  savedApiModule.name
])
  .component(config.COMPONENT_NAME, component);
