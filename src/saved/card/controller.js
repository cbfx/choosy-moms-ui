export default function(SavedAPIDataService, authManager) {
  this.text = {};

  this.loading = {
    isVisible: false
  };

  this.error = {
    isVisible: false
  };

  this.submitting = {
    isVisible: false
  };

  this.data = {};

  this.favorite = {
    data: {},
    isFavorited: null,
    set: function(data) {
      this.isFavorited = true;
      return this.data = data;
    },
    reset: function() {
      this.isFavorited = false;
      return this.data = {};
    }
  };

  this.toggle = () => {
    return this[this.favorite.isFavorited ? 'unsave' : 'save']();
  };

  this.save = () => {
    this.submitting.isVisible = true;

    return SavedAPIDataService.save({
      gifId: this.gif.id,
      gifPreviewUrl: this.gif.images.fixed_height_small.url,
      collectionId: null
    }).$promise
      .then((res) => {
        this.favorite.set(res.data);

        return res;
      }, (err) => {
        return err;
      })
      .finally(() => {
        this.submitting.isVisible = false;
      });
  };

  this.unsave = () => {
    const cacheData = this.favorite.data;

    this.submitting.isVisible = false;
    this.favorite.reset();

    return SavedAPIDataService.delete({
      gifId: this.gif.id
    }).$promise
      .then((res) => {
        return res;
      }, (err) => {
        this.favorite.set(cacheData);

        return err;
      })
      .finally(() => {
        this.submitting.isVisible = false;
      });
  };

  this.$onInit = () => {
    this.loading.isVisible = true;

    if (authManager.isAuthenticated()) {
      SavedAPIDataService.get({
        gifId: this.gif.id
      }).$promise
        .then((res) => {
          if (res.data.items.length) {
            this.favorite.set(res.data.items[0]);
          }

          return res;
        }, (err) => {
          return err;
        })
        .finally(() => {
          this.loading.isVisible = false;
        });
    }
  };

  this.$onChanges = () => {};

  return this;
};
