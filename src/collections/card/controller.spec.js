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

  let CollectionsAPIDataServiceMock;
  let CollectionsAPIDataServiceQueryDeferred;

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
    CollectionsAPIDataServiceMock = jasmine.createSpyObj('CollectionsAPIDataService', [
      'save'
    ]);

    CollectionsAPIDataServiceMock.save.and.callFake(function() {
      CollectionsAPIDataServiceQueryDeferred = createDeferred();

      return {
        '$promise': CollectionsAPIDataServiceQueryDeferred.promise
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
        CollectionsAPIDataService: CollectionsAPIDataServiceMock
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
