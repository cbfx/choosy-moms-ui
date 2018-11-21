import module from './module';
import controller from './controller';

describe(`${module.name} controller`, function() {
  let controllerInstance;
  let $rootScope;
  let $scope;

  beforeEach(function() {
    const scope = {};

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();

      controllerInstance = createController(controller, scope, {});

      controllerInstance.$onInit();
    });
  });

  it('should extend the scope with default values', function() {});
});
