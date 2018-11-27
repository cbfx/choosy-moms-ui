import { AUTH_TOKEN_ID } from './../module';

export default function($location, jwtHelper) {
  this.text = {};

  this.login = () => {
    window.location.href = `${this.getLoginServiceUrl()}`;
  };

  this.logout = () => {
    localStorage.removeItem(AUTH_TOKEN_ID);
    window.location.href = `${this.getLoginServiceUrl()}/leave`;
  };

  this.getLoginServiceUrl = () => {
    const host = $location.host();
    const prodUrl = 'gif.cbfx.net';
    const isProduction = host == prodUrl;
    let stage;

    if (!isProduction) {
      stage = host.split('.')[0];

      return `https://${stage}-login.${prodUrl}`;
    }

    return `https://login.${prodUrl}`;
  };

  this.$onInit = () => {
    const token = localStorage.getItem(AUTH_TOKEN_ID);
    this.payload = jwtHelper.decodeToken(token);
  };

  this.$onChanges = () => {};

  return this;
};
