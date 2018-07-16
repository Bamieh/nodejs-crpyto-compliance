import { request } from '../util/request';
import {SearchTypes} from './search-types';

export
interface searchOptions {
  searchType?: SearchTypes,
  organization?: string,
  pageSize?: number,
  page?: number,
  extension?: string,
}

export
function search(options:searchOptions) {
  const {
    searchType = SearchTypes.code,
    organization,
    pageSize = 100,
    page = 1,
    extension,
  } = options;

  const q = Object.entries({
      org: organization,
      extension: extension,
    })
    .filter(([key, value]) => !!value)
    .map(([key, value]) => `${key}:${value}`)
    .join('+');

  const queryString = `?q=${q}&page=${page}&per_page=${pageSize}`;

  return request({
    host: 'api.github.com',
    headers: { 'User-Agent': 'nodejs' },
    path: `/search/${searchType}${queryString}`,
  })
}