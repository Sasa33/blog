import { FETCH_DATA } from '../constants/ActionTypes'

const initialState = [];

const data = [
    {
        title: 'Slam Dunk',
        year: 2004,
    },
    {
        title: 'Fruit Basket',
        year: 2004,
    }
];

const cartoons = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_DATA:
          return data;
      default:
          return state;
  }
};

export default cartoons;