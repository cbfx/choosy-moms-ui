import BaseModel from './../../../BaseModel';

export function getDefaultSchema() {
  return {
    total_count: 1947,
    count: 25,
    offset: 0
  };
};

export default class Model extends BaseModel {
  constructor(options = {}) {
    super(options, getDefaultSchema);
  }
};
