function dateToTimeStamp(dateString) {
  return new Date(dateString).getTime();
}

function timeStampToDate(timestamp) {
  return new Date(timestamp);
}

export const defaultOptions = {
  controlSize: 4,
  helpBlockSize: 5,
  labelSize: 3
};

export const nameField = {
  key: 'name',
  type: 'input',
  hide: false,
  templateOptions: {
    ...defaultOptions,
    type: 'text',
    controlSize: 9,
    helpBlockSize: 0,
    label: 'Name',
    placeholder: ``,
    required: true
  }
};

export const addressField = {
  key: 'address',
  type: 'input',
  hide: false,
  templateOptions: {
    ...defaultOptions,
    type: 'text',
    controlSize: 9,
    helpBlockSize: 0,
    label: 'Address',
    placeholder: ``,
    required: true
  }
};

export const beginTimestampField = {
  key: 'beginTimestamp',
  type: 'input',
  hide: false,
  templateOptions: {
    ...defaultOptions,
    type: 'date',
    controlSize: 9,
    helpBlockSize: 0,
    label: 'Begins',
    placeholder: ``,
    required: true
  },
  formatters: [timeStampToDate],
  parsers: [dateToTimeStamp]
};

export const endTimestampField = {
  key: 'endTimestamp',
  type: 'input',
  hide: false,
  templateOptions: {
    ...defaultOptions,
    type: 'date',
    controlSize: 9,
    helpBlockSize: 0,
    label: 'Ends',
    placeholder: ``,
    required: true
  },
  formatters: [timeStampToDate],
  parsers: [dateToTimeStamp]
};
