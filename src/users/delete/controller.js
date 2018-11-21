export default function(EventsAPIDataService, $routeParams, $location,
                        DATE_FORMAT_STRING) {
  this.DATE_FORMAT_STRING = DATE_FORMAT_STRING;

  this.text = {
    'page.action': 'Delete Event',
    'link.back.to.events': 'Back to Events',
    cancel: 'Cancel'
  };

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
    delete: function(eventId) {
      this.submitting.isVisible = true;
      this.error.isVisible = false;

      return EventsAPIDataService.delete({
        eventId
      }).$promise
        .then((res) => {
          $location.path(`/events`);

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
    this.data.get($routeParams);
  };

  return this;
};
