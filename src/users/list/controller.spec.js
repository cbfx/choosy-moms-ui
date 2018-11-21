import module from './module';
import controller from './controller';

import { DATE_FORMAT_STRING } from './../../index';

describe(`${module.name} controller`, function() {
  let controllerInstance;
  let $rootScope;
  let $scope;

  let EventsAPIDataServiceMock;
  let eventsListDeferred;

  beforeEach(function() {
    EventsAPIDataServiceMock = jasmine.createSpyObj('EventsAPIDataService', ['query']);

    EventsAPIDataServiceMock.query.and.callFake(function() {
      eventsListDeferred = createDeferred();
      return {$promise: eventsListDeferred.promise};
    });
  });

  beforeEach(function() {
    const scope = {};

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();

      controllerInstance = createController(controller, scope, {
        EventsAPIDataService: EventsAPIDataServiceMock,
        DATE_FORMAT_STRING: DATE_FORMAT_STRING
      });

      controllerInstance.$onInit();
    });
  });

  it('should extend the scope with default values', function() {});
});
