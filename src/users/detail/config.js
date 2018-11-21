import config from './../config';
import {
  API_LIST_INDEX_KEY
} from './../api/data-service';

export default {
  ID: `${config.ID}-detail`,
  COMPONENT_NAME: `${config.ID}Detail`,
  COMPONENT_TAG: `<${config.ID}-detail></${config.ID}-detail>`,
  NAMESPACE: `${config.NAMESPACE}.detail`,
  TITLE: `${config.TITLE} detail`,
  ROUTE: {
    href: `/${config.ID}/:${API_LIST_INDEX_KEY}`
  }
};
