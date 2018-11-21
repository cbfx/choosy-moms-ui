import {
  nameField,
  addressField,
  beginTimestampField,
  endTimestampField,
  imageSetIdField
} from './../create/fields';

export default function(EventsAPIDataService, $routeParams, $location) {
  this.text = {
    'page.action': 'Edit Event',
    'label.id': 'ID',
    'label.address': 'Address',
    'label.date': 'Date',
    'label.imageSetId': 'Image Set ID',
    'link.back.to.events': 'Back to Events',
    submitting: 'Submitting...',
    none: 'None',
    cancel: 'Cancel'
  };

  this.fields = [];

  this.data = {
    model: {},
    cancel: function() {
      return $location.path(`/events/${$routeParams.eventId}`);
    },
    get: function(params) {
      this.loading.isVisible = true;
      this.error.isVisible = false;

      return EventsAPIDataService.get({
        ...params
      }).$promise
        .then((res) => {
          const {$promise, $resolved, data} = res;

          this.model = data;

          return res;
        }, (err) => {
          this.error.isVisible = true;
          this.error.message = err;

          return err;
        }).finally(() => {
          this.submitting.isVisible = false;
        });
    },
    update: function(model) {
      const {id, ...payload} = model;

      this.submitting.isVisible = true;
      this.error.isVisible = false;

      return EventsAPIDataService.update({
        eventId: id
      }, {
        ...payload
      }).$promise
        .then((res) => {
          const {$promise, $resolved, ...item} = res;

          $location.path(`/events/${item.id}`);

          return res;
        }, (err) => {
          this.error.isVisible = true;
          this.error.message = err;

          return err;
        }).finally(() => {
          this.submitting.isVisible = false;
        });
    },
    loading: {
      isVisible: false
    },
    submitting: {
      isVisible: false
    },
    error: {
      isVisible: false,
      message: ''
    }
  };

  this.$onInit = () => {
    this.fields = [
      nameField,
      addressField,
      beginTimestampField,
      endTimestampField,
      imageSetIdField
    ];

    this.data.get($routeParams);
  };

  return this;
};
