import config from './../config';

export default {
  ID: `${config.ID}-list`,
  COMPONENT_NAME: `${config.ID}List`,
  COMPONENT_TAG: `<${config.ID}-list></${config.ID}-list>`,
  NAMESPACE: `${config.NAMESPACE}.list`,
  TITLE: `${config.TITLE} List`,
  ROUTE: {
    href: `/favorites`
  }
};
