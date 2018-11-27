export default function(DATE_FORMAT_STRING, GiphyAPIDataService) {
  this.DATE_FORMAT_STRING = DATE_FORMAT_STRING;

  this.text = {};

  this.$onInit = () => {
    console.log(GiphyAPIDataService);
  };

  this.$onChanges = () => {};

  return this;
};
