import config from './config';
import service from './service';

const dependencies = [];

export default angular.module(`${config.NAMESPACE}`, dependencies)
  .factory(`${config.TITLE.split(' ').join('')}Service`, service);
