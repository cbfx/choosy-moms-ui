import module, {
  getDetailResponseFn,
  getListResponseFn
} from './module';

import config from './config';

import dataService, {
  API_LIST_KEY,
  API_LIST_INDEX_KEY,
  API_RESOURCE_LIST_PATH,
  API_RESOURCE_DETAIL_PATH
} from './data-service';

import listResponseMock from './mocks/list-response-mock';

describe(`${module.name} module`, function() {
  let $httpBackendMock;
  let whenRouteMock;
  let method;
  let url;
  let data;
  let headers;
  let params;

  beforeEach(function() {
    $httpBackendMock = jasmine.createSpyObj('$httpBackend', ['whenRoute']);
    whenRouteMock = jasmine.createSpyObj('whenRoute', ['respond']);

    $httpBackendMock.whenRoute.and.returnValue(whenRouteMock);
  });

  beforeEach(function() {
    window.__USE_MOCKS__ = true;

    angular.mock.module(module.name, function($provide) {
      $provide.value('$httpBackend', $httpBackendMock);
    });
  });

  beforeEach(function() {
    method = '';
    url = '';
    data = '';
    headers = '';
    params = {};
  });

  beforeEach(inject());

  it('should load successfully', function() {
    expect(module.name).toBe(config.NAMESPACE);
  });

  it('[GET]: query a detail response', function() {
    params[API_LIST_INDEX_KEY] = listResponseMock.data.items[0].id;

    const response = getDetailResponseFn(method, url, data, headers, params);

    expect($httpBackendMock.whenRoute).toHaveBeenCalledWith('GET', API_RESOURCE_DETAIL_PATH);
    expect(whenRouteMock.respond).toHaveBeenCalledWith(jasmine.any(Function));
    expect(response[0]).toBe(200);
    expect(response[1]).toEqual(jasmine.any(Object));
  });

  it('[GET]: query a list response', function() {
    const response = getListResponseFn(method, url, data, headers, params);

    expect($httpBackendMock.whenRoute).toHaveBeenCalledWith('GET', API_RESOURCE_LIST_PATH);
    expect(whenRouteMock.respond).toHaveBeenCalledWith(jasmine.any(Function));
    expect(response[0]).toBe(200);
    expect(response[1]).toEqual(jasmine.any(Object));
    expect(response[1].data.items.length).toBeGreaterThan(0);
  });
});
