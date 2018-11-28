export default function(SavedAPIDataService, authManager, $location) {
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

  this.query = () => {
    this.loading.isVisible = true;

    SavedAPIDataService.query({}).$promise
      .then((res) => {
        this.error.isVisible = false;
        this.gifs = res.data

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
    } else {
      $location.path('/');
    }
  };

  this.$onChanges = () => {};

  return this;
};
