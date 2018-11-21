import Model from './Model';

const items = [
  new Model({
    id: 1,
    name: 'PASA: Cuellar Community Center',
    address: '5626 San Fernando St, San Antonio, TX 78237',
    beginTimestamp: '2018-07-09T18:30:00-05:00',
    endTimestamp: '2018-07-09T20:30:00-05:00'
  }),
  new Model({
    id: 2,
    name: 'PASA: Guadalupe Theater',
    address: '1301 Guadalupe St, San Antonio, TX 78207',
    beginTimestamp: '2018-07-11T18:00:00-05:00',
    endTimestamp: '2018-07-11T20:00:00-05:00'
  }),
  new Model({
    id: 3,
    name: 'PASA: Southside Lions Center',
    address: '3001 Hiawatha, San Antonio, TX 78210',
    beginTimestamp: '2018-07-17T18:30:00-05:00',
    endTimestamp: '2018-07-17T20:30:00-05:00'
  }),
  new Model({
    id: 4,
    name: `PASA: St. Ann's Parish Center`,
    address: '714 Fredricksburg, San Antonio, TX 72801',
    beginTimestamp: '2018-07-19T18:00:00-05:00',
    endTimestamp: '2018-07-19T20:00:00-05:00'
  }),
  new Model({
    id: 5,
    name: `PASA: Urban Ecology Center at Hardberger Park`,
    address: '8400 NW Military Hwy, San Antonio, TX 78231',
    beginTimestamp: '2018-07-21T14:00:00-05:00',
    endTimestamp: '2018-07-21T16:00:00-05:00'
  }),
  new Model({
    id: 6,
    name: `PASA: Toolyard`,
    address: '10303 Toolyard, San Antonio, TX 78284',
    beginTimestamp: '2018-07-25T18:00:00-05:00',
    endTimestamp: '2018-07-25T20:00:00-05:00'
  })
];

export default {
  data: {
    items
  }
};
