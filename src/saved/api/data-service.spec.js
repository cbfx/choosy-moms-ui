import module from './module';
import config from './config';

import dataService from './data-service';

describe(`${module.name} data-service`, function() {
  let service = dataService;
  let serviceInstance;
  let $resource;
  let $resourceMock;

  beforeEach(function() {
    angular.mock.module(module.name);

    inject(($injector) => {
      $resource = $injector.get('$resource');
      $resourceMock = jasmine.createSpy().and.callFake($resource);
    });
  });

  beforeEach(function() {
    serviceInstance = service($resourceMock);
  });

  it('should be a function', function() {
    expect(dataService).toEqual(jasmine.any(Function));
  });

  it('should instantiate with default values', function() {
    expect($resourceMock).toHaveBeenCalled();
  });
});
