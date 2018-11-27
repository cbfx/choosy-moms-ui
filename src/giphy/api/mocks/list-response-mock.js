import Gif from './Gif';
import Meta from './Meta';
import Pagination from './Pagination';

const items = [
  new Gif(),
  new Gif(),
  new Gif(),
  new Gif()
];

export default {
  data: items,
  meta: new Meta(),
  pagination: new Pagination()
};
