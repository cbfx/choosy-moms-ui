import config from './../config';

export default {
  ID: `${config.ID}-create`,
  COMPONENT_NAME: `${config.ID}Create`,
  COMPONENT_TAG: `<${config.ID}-create></${config.ID}-create>`,
  NAMESPACE: `${config.NAMESPACE}.create`,
  TITLE: `${config.TITLE} Create`,
  ROUTE: {
    href: `/${config.ID}/create`
  }
};
