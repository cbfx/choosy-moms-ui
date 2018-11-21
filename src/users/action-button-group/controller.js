import { SLIDESHOW_MODE_TESTING } from './../../surveys/create/controller';

export default function($location) {
  this.text = {
    'button.event.survey': 'Start Survey',
    'button.event.testSurvey': 'Test Survey',
    'button.event.face': 'View Melted Face',
    'button.event.edit': 'Edit',
    'button.event.delete': 'Delete'
  };

  this.SLIDESHOW_MODE_TESTING = SLIDESHOW_MODE_TESTING;

  this.goToUrl = function(path) {
    return $location.url(path);
  };

  this.$onInit = () => {
    this.nowTimestampInSeconds = new Date().getTime();
    this.eventEndTimestampInSeconds = new Date(this.eventEndTimestamp).getTime();
  };

  this.$onChanges = (changes) => {
    const eventEndTimestamp = changes.eventEndTimestamp;

    this.nowTimestampInSeconds = new Date().getTime();

    if (eventEndTimestamp && eventEndTimestamp.currentValue) {
      this.eventEndTimestampInSeconds = new Date(eventEndTimestamp.currentValue).getTime();
    }
  };

  return this;
};
