import module from './module';
import controller from './controller';

describe(`${module.name} controller`, function() {
  let controllerInstance;
  let $rootScope;
  let $scope;

  let SavedAPIDataServiceMock;
  let SavedAPIDataServiceGetDeferred;
  let SavedAPIDataServiceSaveDeferred;
  let SavedAPIDataServiceDeleteDeferred;

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
      'get',
      'save',
      'delete'
    ]);

    SavedAPIDataServiceMock.get.and.callFake(function() {
      SavedAPIDataServiceGetDeferred = createDeferred();

      return {
        '$promise': SavedAPIDataServiceGetDeferred.promise
      };
    });

    SavedAPIDataServiceMock.save.and.callFake(function() {
      SavedAPIDataServiceSaveDeferred = createDeferred();

      return {
        '$promise': SavedAPIDataServiceSaveDeferred.promise
      };
    });

    SavedAPIDataServiceMock.delete.and.callFake(function() {
      SavedAPIDataServiceDeleteDeferred = createDeferred();

      return {
        '$promise': SavedAPIDataServiceDeleteDeferred.promise
      };
    });
  });

  beforeEach(function() {
    const scope = {};

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();

      controllerInstance = createController(controller, scope, {
        SavedAPIDataService: SavedAPIDataServiceMock,
        authManager: authManagerMock
      }, {
        gif: {
          id: 1
        }
      });

      controllerInstance.$onInit();
    });
  });

  it('should extend the scope with default values', function() {});
});
