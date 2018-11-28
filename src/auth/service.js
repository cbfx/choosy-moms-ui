import { AUTH_TOKEN_ID } from './module';

export default function(jwtHelper) {
  const decodeToken = function() {
    const token = localStorage.getItem(AUTH_TOKEN_ID);
    return jwtHelper.decodeToken(token);
  };

  const getUserEmail = function() {
    return decodeToken()['email'];
  };

  const getUserId = function() {
    return decodeToken()['cognito:username'];
  };

  const clearToken = function() {
    return localStorage.removeItem(AUTH_TOKEN_ID);
  };

  return {
    decodeToken,
    getUserEmail,
    getUserId,
    clearToken
  };
};
