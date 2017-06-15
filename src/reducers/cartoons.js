import { FETCH_DATA } from '../constants/ActionTypes'

const initialState = [];

const data = [
    {
        title: 'Slam Dunk',
        cnTitle: '灌篮高手',
        jpTitle: 'スラムダンク',
        imgURL: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2445459194.webp',
        year: 2004,
    },
    {
        title: 'Fruit Basket',
        cnTitle: '水果篮子',
        jpTitle: 'フルーツバスケット',
        imgURL: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2257393322.webp',
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

export default cartoons