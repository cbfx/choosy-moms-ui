import config from './config';
import component from './component';

export default angular.module(`${config.NAMESPACE}`, [
])
  .component(config.COMPONENT_NAME, component);
