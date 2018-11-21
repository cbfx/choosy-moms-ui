import module from './module';

describe(`${module.name} component`, function() {
  let compiledTemplate;
  let scope;
  let template = '<events-action-button-group></events-action-button-group>';

  beforeEach(angular.mock.module(module.name));

  beforeEach(function() {
    scope = {};

    compiledTemplate = createDirective(template, scope);
  });
});
