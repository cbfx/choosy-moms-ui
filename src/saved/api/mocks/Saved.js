import BaseModel from './../../../BaseModel';
import uuid from 'uuid';

export function getDefaultSchema() {
  return {
    gifId: '12345',
    gifPreviewUrl: 'https://www.someurl.com',
    userId: uuid.v4(),
    collectionId: null
  };
};

export default class Saved extends BaseModel {
  constructor(options = {}) {
    super(options, getDefaultSchema);
  }
};
