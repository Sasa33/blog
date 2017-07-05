import {FETCH_NEWS} from '../constants/ActionTypes'

const initialState = {};

const news = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      const result = action.payload;
      const oldHits = result.page !== 0 && state[result.query]
        ? state[result.query].hits
        : [];

      return {
        ...state,
        [result.query]: {
          hits: [
            ...oldHits,
            ...result.hits
          ],
          page: result.page
        }
      };
    default:
      return state
  }
};

export default news