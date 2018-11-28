export default function(DATE_FORMAT_STRING, GiphyAPIDataService, $location,
                        CollectionsAPIDataService, authService, $q, authManager) {
  this.DATE_FORMAT_STRING = DATE_FORMAT_STRING;

  this.text = {};

  this.gifs = [];

  this.query = '';

  this.error = {
    isVisible: false
  };

  this.loading = {
    isVisible: false
  };

  this.loadMore = () => {
    this.search(this.query, this.gifs.length);
  };

  this.search = (q = '', offset = 0) => {
    this.loading.isVisible = true;
    $location.search({q});

    if (offset === 0) {
      this.gifs = [];
    }

    GiphyAPIDataService.search({
      q,
      offset,
      count: 30
    }).$promise
      .then((res) => {
        this.error.isVisible = false;
        this.gifs = this.gifs.concat(res.data);
        this.pagination = res.pagination;

        return res;
      }, (err) => {
        this.error.isVisible = true;

        return err;
      }).finally(() => {
        this.loading.isVisible = false;
      });
  };

  this.$onInit = () => {
    this.query = $location.search().q;
    this.userId = authService.getUserId();

    if (this.query) {
      this.search(this.query);
    }

    if (authManager.isAuthenticated()) {
      $q.all([
        CollectionsAPIDataService.query().$promise
      ]).then(([collectionResponse]) => {
        this.collections = collectionResponse.data.items;

        return [collectionResponse];
      });
    }
  };

  this.$onChanges = () => {};

  return this;
};
