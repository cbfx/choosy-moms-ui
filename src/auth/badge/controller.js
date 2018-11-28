export default function($location, jwtHelper, PRODUCTION_URL,
                        authService) {
  this.text = {};

  this.login = () => {
    window.location.href = `${this.getLoginServiceUrl()}`;
  };

  this.logout = () => {
    authService.clearToken();
    window.location.href = `${this.getLoginServiceUrl()}/leave`;
  };

  this.getLoginServiceUrl = () => {
    const host = $location.host();
    const prodUrl = PRODUCTION_URL;
    const isProduction = host == prodUrl;
    let stage;

    if (!isProduction) {
      stage = host.split('.')[0];

      return `https://${stage}-login.${prodUrl}`;
    }

    return `https://login.${prodUrl}`;
  };

  this.$onInit = () => {
    this.payload = authService.decodeToken();
  };

  this.$onChanges = () => {};

  return this;
};
