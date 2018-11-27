import BaseModel from './../../../BaseModel';
import uuid from 'uuid';

export function getDefaultSchema() {
  return {
  };
};

export default class Collection extends BaseModel {
  constructor(options = {}) {
    super(options, getDefaultSchema);
  }
};
