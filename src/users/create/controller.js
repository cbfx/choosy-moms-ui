import {
  nameField,
  addressField,
  beginTimestampField,
  endTimestampField
} from './fields';

export default function(EventsAPIDataService, $q, $location) {
  this.text = {
    'page.action': 'Create Event',
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
    save: function(model) {
      this.submitting.isVisible = true;
      this.error.isVisible = false;

      return EventsAPIDataService.save({
        ...model
      }).$promise
        .then((res) => {
          const {$promise, $resolved, data} = res;

          $location.path(`/events/${data.id}`);

          return res;
        }, (err) => {
          this.error.isVisible = true;
          this.error.message = err;

          return err;
        }).finally(() => {
          this.submitting.isVisible = false;
        });
    },
    submitting: {
      isVisible: true
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
      endTimestampField
    ];
  };

  return this;
};
