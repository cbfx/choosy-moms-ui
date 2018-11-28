import controller from './controller';
import template from './template.tpl.html';

export default {
  controller,
  bindings: {
    collections: '<',
    collectionId: '<',
    userId: '<',
    gifId: '<',
    onSuccess: '&'
  },
  template: template
};
