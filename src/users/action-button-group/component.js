import controller from './controller';
import template from './template.tpl.html';

export default {
  controller,
  bindings: {
    eventId: '<',
    eventEndTimestamp: '<',
    size: '@'
  },
  template: template
};
