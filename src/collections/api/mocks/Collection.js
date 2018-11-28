import BaseModel from './../../../BaseModel';
import uuid from 'uuid';

export function getDefaultSchema() {
  return {
    collectionId: uuid.v4(),
    name: 'Some Collection',
    userId: uuid.v4()
  };
};

export default class Collection extends BaseModel {
  constructor(options = {}) {
    super(options, getDefaultSchema);
  }
};
