import { FETCH_NEWS } from '../constants/ActionTypes'
import { PATH_BASE, PATH_SEARCH, PARAM_SEARCH, PARAM_PAGE } from '../constants/SearchConstants'

const _getNews = (result) => ({
  type: FETCH_NEWS,
  payload: result
});

// export const fetchNews2 = async (searchItem, page) => {
//     const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchItem}&${PARAM_PAGE}${page}`;
//     // const result = await fetch(url)
//     //     .then((response) => response.json());
//     const result = await (await fetch(url)).json();
//     return _getNews(result)
// };

export const fetchNews = (searchItem, page) => {
  return async (dispatch) => {
    const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchItem}&${PARAM_PAGE}${page}`;
    const result = await (await fetch(url)).json();
    return dispatch(_getNews(result))
  }
};