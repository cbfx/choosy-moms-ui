import { getDetailResponseFn } from './../api/module';

export default function($routeParams, EventsAPIDataService, DATE_FORMAT_STRING,
                        $q, PortraitsAPIDataService) {
  this.DATE_FORMAT_STRING = DATE_FORMAT_STRING;

  this.text = {
    'section.header.details': 'Details',
    'label.id': 'ID',
    'label.address': 'Address',
    'label.status': 'Status',
    'label.date': 'Date',
    'link.back.to.events': 'Back to Events',
    loading: 'Loading...',
    none: 'None'
  };

  this.data = {
    get: function(params) {
      this.loading.isVisible = true;
      this.error.isVisible = false;

      return $q.when(getDetailResponseFn(null, null, null, null, params))
        .then(([statusCode, res]) => {

          this.item = {
            ...res.data.items[0]
          };

          return res;
        }, (err) => {
          this.error.isVisible = true;

          return err;
        }).finally(() => {
          this.loading.isVisible = false;
        });

      // TODO: re-enable when events api is online.
      // return EventsAPIDataService.get({
      //   ...params
      // }).$promise
      //   .then((res) => {
      //     const {$promise, $resolved, data} = res;
      //
      //     this.item = {
      //       ...data.items[0]
      //     };
      //
      //     return res;
      //   }, (err) => {
      //     this.error.isVisible = true;
      //
      //     return err;
      //   }).finally(() => {
      //     this.loading.isVisible = false;
      //   });
    },
    item: {},
    loading: {
      isVisible: true
    },
    error: {
      isVisible: false
    }
  };

  this.images = {
    items: [],
    loading: {
      isVisible: false
    },
    query: function(params) {
      this.loading.isVisible = true;

      return PortraitsAPIDataService.query({
        Prefix: `300fm-${params.eventId}`
      }).then((data) => {
        this.items = data.Contents.map((image) => {
          return {
            ...image,
            imageUrl: `https://s3-us-west-2.amazonaws.com/${data.Name}/${image.Key}`
          };
        });

        return data;
      }).finally(() => {
        this.loading.isVisible = false;
      });
    }
  };

  this.$onInit = () => {
    this.data.item.id = $routeParams.eventId;

    this.data.get($routeParams);
    this.images.query($routeParams);
  };

  this.$onDestroy = () => {};

  return this;
};
