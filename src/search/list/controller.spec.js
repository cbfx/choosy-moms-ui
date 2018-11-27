import module from './module';
import controller from './controller';

import { DATE_FORMAT_STRING } from './../../index';

describe(`${module.name} controller`, function() {
  let controllerInstance;
  let $rootScope;
  let $scope;

  let GiphyAPIDataServiceMock;
  let GiphyAPIDataServiceQueryDeferred;

  beforeEach(function() {
    GiphyAPIDataServiceMock = jasmine.createSpyObj('GiphyAPIDataService', [
      'search'
    ]);

    GiphyAPIDataServiceMock.search.and.callFake(function() {
      GiphyAPIDataServiceQueryDeferred = createDeferred();

      return {
        '$promise': GiphyAPIDataServiceQueryDeferred.promise
      };
    });
  });

  beforeEach(function() {
    const scope = {};

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();

      controllerInstance = createController(controller, scope, {
        DATE_FORMAT_STRING: DATE_FORMAT_STRING,
        GiphyAPIDataService: GiphyAPIDataServiceMock
      });

      controllerInstance.$onInit();
    });
  });

  it('should extend the scope with default values', function() {});
});
