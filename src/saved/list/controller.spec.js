import module from './module';
import controller from './controller';

import { DATE_FORMAT_STRING } from './../../index';

describe(`${module.name} controller`, function() {
  let controllerInstance;
  let $rootScope;
  let $scope;

  let SavedAPIDataServiceMock;
  let SavedAPIDataServiceQueryDeferred;
  let $locationMock;
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
    SavedAPIDataServiceMock = jasmine.createSpyObj('SavedAPIDataService', [
      'query'
    ]);

    SavedAPIDataServiceMock.query.and.callFake(function() {
      SavedAPIDataServiceQueryDeferred = createDeferred();

      return {
        '$promise': SavedAPIDataServiceQueryDeferred.promise
      };
    });
  });

  beforeEach(function() {
    const scope = {};

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      $locationMock = $injector.get('$location');

      controllerInstance = createController(controller, scope, {
        SavedAPIDataService: SavedAPIDataServiceMock,
        $location: $locationMock,
        authManager: authManagerMock
      });

      controllerInstance.$onInit();
    });
  });

  it('should extend the scope with default values', function() {});
});
