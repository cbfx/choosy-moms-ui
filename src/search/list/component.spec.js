import config from './config';
import module from './module';

xdescribe(`${module.name} component`, function() {
  let compiledTemplate;
  let scope;
  let template = `<${config.ID}></${config.ID}>`;

  beforeEach(angular.mock.module(module.name));

  beforeEach(function() {
    scope = {};

    compiledTemplate = createDirective(template, scope);
  });
});
