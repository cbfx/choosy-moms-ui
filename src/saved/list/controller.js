export default function(SavedAPIDataService, authManager, $location, $q,
                        CollectionsAPIDataService) {
  this.text = {};

  this.gifs = [];

  this.error = {
    isVisible: false
  };

  this.loading = {
    isVisible: false
  };

  this.query = () => {
    this.loading.isVisible = true;

    SavedAPIDataService.query({}).$promise
      .then((res) => {
        this.error.isVisible = false;
        this.gifs = res.data.items;

        return res;
      }, (err) => {
        this.error.isVisible = true;

        return err;
      }).finally(() => {
        this.loading.isVisible = false;
      });
  };

  this.$onInit = () => {
    if (authManager.isAuthenticated()) {
      this.query();

      $q.all([
        CollectionsAPIDataService.query().$promise
      ]).then(([collectionResponse]) => {
        this.collections = collectionResponse.data.items;

        return [collectionResponse];
      });
    } else {
      $location.path('/');
    }
  };

  this.$onChanges = () => {};

  return this;
};
