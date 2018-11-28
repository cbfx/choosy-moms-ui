import module from './module';
import controller from './controller';

import { DATE_FORMAT_STRING } from './../../index';

describe(`${module.name} controller`, function() {
  let controllerInstance;
  let $rootScope;
  let $scope;

  let GiphyAPIDataServiceMock;
  let GiphyAPIDataServiceQueryDeferred;
  let CollectionsAPIDataServiceMock;
  let CollectionsAPIDataServiceQueryDeferred;
  let authServiceMock;
  let $locationMock;
  let $qMock;
  let authManagerMock;

  beforeEach(function() {
    authManagerMock = jasmine.createSpyObj('authManager', [
      'isAuthenticated'
    ]);

    authManagerMock.isAuthenticated.and.callFake(function() {
      return true;
    });
  });

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
    CollectionsAPIDataServiceMock = jasmine.createSpyObj('CollectionsAPIDataService', [
      'query'
    ]);

    CollectionsAPIDataServiceMock.query.and.callFake(function() {
      CollectionsAPIDataServiceQueryDeferred = createDeferred();

      return {
        '$promise': CollectionsAPIDataServiceQueryDeferred.promise
      };
    });
  });

  beforeEach(function() {
    authServiceMock = jasmine.createSpyObj('authService', [
      'getUserId'
    ]);

    authServiceMock.getUserId.and.callFake(function() {
      return 1234;
    });
  });

  beforeEach(function() {
    const scope = {};

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      $locationMock = $injector.get('$location');
      $qMock = $injector.get('$q');

      controllerInstance = createController(controller, scope, {
        DATE_FORMAT_STRING: DATE_FORMAT_STRING,
        GiphyAPIDataService: GiphyAPIDataServiceMock,
        CollectionsAPIDataService: CollectionsAPIDataServiceMock,
        $location: $locationMock,
        authService: authServiceMock,
        $q: $qMock,
        authManager: authManagerMock
      });

      controllerInstance.$onInit();
    });
  });

  it('should extend the scope with default values', function() {});
});
