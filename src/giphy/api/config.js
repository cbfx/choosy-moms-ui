import config from './../config';

export default {
  NAMESPACE: `${config.NAMESPACE}.api`,
  TITLE: `${config.TITLE} API`,
  API: {
    hostName: 'https://api.giphy.com',
    basePath: '',
    version: 'v1',
    prefix: ''
  }
};
