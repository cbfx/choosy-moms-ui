import BaseModel from './../../../BaseModel';
import uuid from 'uuid';

export function getDefaultSchema() {
  return {
  };
};

export default class Saved extends BaseModel {
  constructor(options = {}) {
    super(options, getDefaultSchema);
  }
};
