import BaseModel from './../../../BaseModel';
import uuid from 'uuid';

import imagesListResponseMock from './../../../images/api/mocks/list-response-mock';

export function getDefaultSchema() {
  return {
    id: uuid.v4(),
    name: 'Some event name',
    beginTimestamp: new Date().getTime(),
    endTimestamp: new Date().getTime(),
    address: '114 Camp St., San Antonio, TX 78204',
    images: imagesListResponseMock.data.items.slice(0),
    faceUrl: 'https://s3.amazonaws.com/300fm-images-tmp/300fm-image-george-henry-thomas.jpg'
  };
};

export default class Model extends BaseModel {
  constructor(options = {}) {
    super(options, getDefaultSchema);
  }
};
