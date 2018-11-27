import config from './config';

export const API_BASE_PATH = `${config.API.basePath}`;
export const API_FULL_PATH = `${API_BASE_PATH}/${config.API.version}`;

export const API_LIST_KEY = 'gifs';
export const API_LIST_INDEX_KEY = 'gif_id';
export const API_RESOURCE_LIST_PATH = `${API_FULL_PATH}/${API_LIST_KEY}`;
export const API_RESOURCE_DETAIL_PATH = `${API_RESOURCE_LIST_PATH}/:${API_LIST_INDEX_KEY}`;

/*
* Check out
* {@link ?? API Repo}
* for more information.
*/

export default function($resource) {
  return $resource(
    API_RESOURCE_LIST_PATH,
    {
      API_LIST_INDEX_KEY: `@${API_LIST_INDEX_KEY}`
    },
    {
      get: {
        method: 'GET'
      },
      query: {
        method: 'GET',
        isArray: false
      },
      search: {
        url: `${API_LIST_KEY}/search`,
        method: 'GET'
      }
    }
  );
};
