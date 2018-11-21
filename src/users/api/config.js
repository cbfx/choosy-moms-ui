import config from './../config';

export default {
  NAMESPACE: `${config.NAMESPACE}.api`,
  TITLE: `${config.TITLE} API`,
  API: {
    basePath: '',
    version: 'v1',
    prefix: ''
  }
};
