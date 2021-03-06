import uuid from 'uuid';

import config from './config';
import { default as Model } from './mocks/Saved';

import dataService, {
  API_LIST_KEY,
  API_LIST_INDEX_KEY,
  API_RESOURCE_LIST_PATH,
  API_RESOURCE_DETAIL_PATH,
} from './data-service';

import listResponseMock from './mocks/list-response-mock';

export const getListResponseFn = function(method, url, data, headers, params) {
  const filteredItems = listResponseMock.data.items.slice(0);
  let response;

  response = [
    200,
    {
      data: {
        items: filteredItems
      }
    }
  ];

  console.log(method, url, data, headers, params, response);

  return response;
};

export const getDetailResponseFn = function(method, url, data, headers, params) {
  return getListResponseFn(method, url, data, headers, params);
};

export const putDetailResponseFn = function(method, url, data, headers, params) {
  const model = {
    [API_LIST_INDEX_KEY]: params[API_LIST_INDEX_KEY]
  };

  const response = [
    200,
    {
      data: {
        ...(new Model(model))
      }
    }
  ];

  console.log(method, url, data, headers, params, response);

  return response;
};

export const postListResponseFn = function(method, url, data, headers, params) {
  const response = [
    200,
    {
      data: {
        ...(new Model(JSON.parse(data)))
      }
    }
  ];

  console.log(method, url, data, headers, params, response);

  return response;
};

const dependencies = [
  'ngResource'
];

if (__USE_MOCKS__) {
  dependencies.push('ngMockE2E');
}

export default angular.module(`${config.NAMESPACE}`, dependencies)
  .factory(`${config.TITLE.split(' ').join('')}DataService`, dataService)
  .run(function($httpBackend) {
    if (__USE_MOCKS__) {
      console.log(`[MOCK] Registering ${config.TITLE.split(' ').join('')}DataService...`);
      console.log(`[MOCK] ${config.TITLE} Mocks Enabled...`);

      $httpBackend.whenRoute('GET', API_RESOURCE_DETAIL_PATH)
        .respond(getDetailResponseFn);

      $httpBackend.whenRoute('PUT', API_RESOURCE_DETAIL_PATH)
        .respond(putDetailResponseFn);

      $httpBackend.whenRoute('GET', API_RESOURCE_LIST_PATH)
        .respond(getListResponseFn);

      $httpBackend.whenRoute('POST', API_RESOURCE_LIST_PATH)
        .respond(postListResponseFn);

      $httpBackend.whenRoute('DELETE', API_RESOURCE_DETAIL_PATH)
        .respond(putDetailResponseFn);
    }
  });
