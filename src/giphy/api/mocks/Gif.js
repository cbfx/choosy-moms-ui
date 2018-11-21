import BaseModel from './../../../BaseModel';
import uuid from 'uuid';

import Image from './Image';
import Meta from './Meta';
import Pagination from './Pagination';

export function getDefaultSchema() {
  return {
    type: 'gif',
    id: 'YsTs5ltWtEhnq',
    slug: 'confused-flying-YsTs5ltWtEhnq',
    url: 'http://giphy.com/gifs/confused-flying-YsTs5ltWtEhnq',
    bitly_url: 'http://gph.is/1gsWDcL',
    embed_url: 'http://giphy.com/embed/YsTs5ltWtEhnq',
    username: 'JoeCool4000',
    source: 'http://www.reddit.com/r/reactiongifs/comments/1xpyaa/superman_goes_to_hollywood/',
    rating: 'g',
    content_url: '',
    source_tld: 'cheezburger.com',
    source_post_url: 'http://cheezburger.com/5282328320',
    update_datetime: '2013-08-01 12:41:48',
    create_datetime: '2013-08-01 12:41:48',
    import_datetime: '2013-08-01 12:41:48',
    trending_datetime: '2013-08-01 12:41:48',
    images: new Image(),
    title: 'Happy Dancing GIF',
    meta: new Meta(),
    pagination: new Pagination()
  };
};

export default class Model extends BaseModel {
  constructor(options = {}) {
    super(options, getDefaultSchema);
  }
};
