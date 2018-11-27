export default function(DATE_FORMAT_STRING, GiphyAPIDataService) {
  this.DATE_FORMAT_STRING = DATE_FORMAT_STRING;

  this.text = {};

  this.gifs = [];

  this.search = (query = '') => {
    GiphyAPIDataService.search({
      q: query
    }).$promise
      .then((res) => {
        this.gifs = res.data;

        return res;
      }, (err) => {
        console.log(err);
        return err;
      }).finally(() => {
        console.log('finally');
      });
  };

  this.$onInit = () => {

  };

  this.$onChanges = () => {};

  return this;
};
