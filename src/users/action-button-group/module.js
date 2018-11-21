import config from './config';
import component from './component';

import angularMoment from 'angular-moment';

export default angular.module(`${config.NAMESPACE}`, [
  'angularMoment'
])
  .component(`eventsActionButtonGroup`, component);
