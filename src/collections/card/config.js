import config from './../config';

export default {
  ID: `${config.ID}-card`,
  COMPONENT_NAME: `${config.ID}Card`,
  COMPONENT_TAG: `<${config.ID}-card></${config.ID}-card>`,
  NAMESPACE: `${config.NAMESPACE}.card`,
  TITLE: `${config.TITLE} Card`,
  ROUTE: {
    href: `/${config.ID}`
  }
};
