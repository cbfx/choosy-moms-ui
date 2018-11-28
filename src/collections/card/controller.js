export default function(SavedAPIDataService, CollectionsAPIDataService) {
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

  this.onChangeCollection = () => {
    this.submitting.isVisible = true;

    return SavedAPIDataService.update({
      gifId: this.gifId,
      collectionId: this.selectedCollectionId
    }).$promise
      .then((res) => {
        if (this.onSuccess) {
          this.onSuccess({res});
        }

        return res;
      }, (err) => {
        return err;
      })
      .finally(() => {
        this.submitting.isVisible = false;
      });
  };

  this.createNewCollection = () => {
    this.submitting.isVisible = true;

    return CollectionsAPIDataService.save({
      name: this.newCollectionName
    }).$promise
      .then((res) => {
        this.collections.push(res.data);
        this.selectedCollectionId = res.data.collectionId;

        return this.onChangeCollection();
      }, (err) => {
        return err;
      })
      .finally(() => {
        this.newCollectionName = null;
        this.submitting.isVisible = false;
      });
  };

  this.categorySelection = {
    selected: 'select', // select, input
    toggle: function() {
      this.selected = this.selected === 'select' ? 'input' : 'select';
    }
  };

  this.$onInit = () => {
    if (this.collectionId) {
      this.selectedCollectionId = collectionId;
    }
  };

  this.$onChanges = () => {};

  return this;
};