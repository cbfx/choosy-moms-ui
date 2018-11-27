import config from './config';
import badgeModule from './badge/module';

export const AUTH_TOKEN_ID = 'token';

export default angular.module(`${config.NAMESPACE}`, [
  'angular-jwt',
  'angular-storage',
  badgeModule.name
])
  .config(function($httpProvider, jwtOptionsProvider) {
    jwtOptionsProvider.config({
      unauthenticatedRedirectPath: '/login',
      tokenGetter: function() {
        return localStorage.getItem(AUTH_TOKEN_ID);
      }
    });

    $httpProvider.interceptors.push('jwtInterceptor');
  })
  .run(function($location, authManager) {
    const hash = $location.hash() || '';
    let parsed;
    let token;

    if (hash) {
      parsed = (hash.split('&') || []).map((param) => {
        return param.split('=');
      });

      token = parsed.find((item) => {
        return item[0] === 'token';
      });

      localStorage.setItem(AUTH_TOKEN_ID, token[1]);

      $location.hash('');
    }

    authManager.checkAuthOnRefresh();
    authManager.redirectWhenUnauthenticated();
  });
