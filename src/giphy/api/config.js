import config from './../config';

export default {
  NAMESPACE: `${config.NAMESPACE}.api`,
  TITLE: `${config.TITLE} API`,
  API: {
    basePath: '/giphy',
    version: 'v1',
    prefix: ''
  }
};
