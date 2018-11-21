import listResponseMock from './../api/mocks/list-response-mock';
import { getListResponseFn } from './../api/module';

export default function(EventsAPIDataService, DATE_FORMAT_STRING, $q) {
  this.DATE_FORMAT_STRING = DATE_FORMAT_STRING;

  this.text = {
    'page.header': 'Events',
    'button.create': 'Create Event',
    'button.preview': 'Preview Camera'
  };

  this.data = {
    query: function() {
      this.loading.isVisible = true;

      return $q.when()
        .then(() => {
          const [statusCode, res] = getListResponseFn(null, null, null, null, {});
          return this.items = res.data.items.slice(0);
        })
        .finally(() => {
          this.loading.isVisible = false;
        });

      // TODO: Re-enable when events api is online.
      // return EventsAPIDataService.query()
      //   .$promise
      //   .then((res) => {
      //     this.items = res.data.items.slice(0);
      //     this.error.isVisible = false;
      //
      //     return res;
      //   }, (err) => {
      //     this.error.isVisible = true;
      //
      //     return err;
      //   })
      //   .finally(() => {
      //     this.loading.isVisible = false;
      //   });
    },
    items: [],
    loading: {
      isVisible: true
    },
    error: {
      isVisible: false
    }
  };

  this.$onInit = () => {
    this.data.query();
  };

  this.$onChanges = () => {};

  return this;
};
