import config from './../config';
import {
  API_LIST_INDEX_KEY
} from './../api/data-service';

export default {
  ID: `${config.ID}-delete`,
  COMPONENT_NAME: `${config.ID}Delete`,
  COMPONENT_TAG: `<${config.ID}-delete></${config.ID}-delete>`,
  NAMESPACE: `${config.NAMESPACE}.delete`,
  TITLE: `${config.TITLE} Delete`,
  ROUTE: {
    href: `/${config.ID}/:${API_LIST_INDEX_KEY}/delete`
  }
};
