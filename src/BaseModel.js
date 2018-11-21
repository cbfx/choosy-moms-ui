export default class BaseModel {
  constructor(options = {}, getDefaultSchema) {
    const defaults = getDefaultSchema();
    const schemaKeys = Object.keys(defaults);

    for(let i = 0; i < schemaKeys.length; i++) {
      const key = schemaKeys[i];
      const keyExists = key ? Object.prototype.hasOwnProperty.call(options, key) : false;

      this[key] = keyExists ? options[key] : defaults[key];
    };
  }
};
