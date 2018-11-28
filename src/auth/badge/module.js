import config from './config';
import component from './component';

import authModule from './../module';

export default angular.module(`${config.NAMESPACE}`, [
  authModule.name
])
  .component(config.COMPONENT_NAME, component);
