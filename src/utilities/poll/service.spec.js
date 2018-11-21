import module from './module';
import config from './config';
import service from './service';

describe(`${module.name} service`, function() {
  let serviceInstance;

  let $timeoutMock;

  beforeEach(function() {
    angular.mock.module(module.name);

    inject(($injector) => {
      $timeoutMock = $injector.get('$timeout');
    });
  });

  beforeEach(function() {
    serviceInstance = service($timeoutMock);
  });

  it('should be a function', function() {
    expect(service).toEqual(jasmine.any(Function));
  });
});
