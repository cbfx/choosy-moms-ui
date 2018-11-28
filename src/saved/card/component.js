import controller from './controller';
import template from './template.tpl.html';

export default {
  controller,
  bindings: {
    collections: '<',
    userId: '<',
    gifId: '<',
    gifPreviewUrl: '<',
    gifUrl: '<'
  },
  template: template
};
