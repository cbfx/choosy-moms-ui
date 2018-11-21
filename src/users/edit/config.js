import config from './../config';
import {
  API_LIST_INDEX_KEY
} from './../api/data-service';

export default {
  ID: `${config.ID}-edit`,
  COMPONENT_NAME: `${config.ID}Edit`,
  COMPONENT_TAG: `<${config.ID}-edit></${config.ID}-edit>`,
  NAMESPACE: `${config.NAMESPACE}.edit`,
  TITLE: `${config.TITLE} Edit`,
  ROUTE: {
    href: `/${config.ID}/:${API_LIST_INDEX_KEY}/edit`
  }
};
