import { FETCH_DATA } from '../constants/ActionTypes'

const initialState = [];

const data = [
    {
        title: 'One Piece',
        cnTitle: '海贼王',
        jpTitle: 'ワンピース',
        imgURL: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2197828404.webp',
        year: 2007,
    },
    {
        title: 'The Prince of Tennis',
        cnTitle: '网球王子',
        jpTitle: 'テニスの王子様',
        imgURL: 'https://img3.doubanio.com/lpic/s1495604.jpg',
        year: 2006,
    },
    {
        title: 'Hunter x Hunter',
        cnTitle: '全职猎人',
        jpTitle: 'ハンター×ハンター',
        imgURL: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2158657076.webp',
        year: 2003,
    },
    {
        title: 'Fruit Basket',
        cnTitle: '水果篮子',
        jpTitle: 'フルーツバスケット',
        imgURL: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2257393322.webp',
        year: 2002,
    },
    {
        title: 'Shaman King',
        cnTitle: '通灵王',
        jpTitle: 'シャーマンキング',
        imgURL: 'https://img1.doubanio.com/lpic/s1633069.jpg',
        year: 2002,
    },
    {
        title: 'Slam Dunk',
        cnTitle: '灌篮高手',
        jpTitle: 'スラムダンク',
        imgURL: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2445459194.webp',
        year: 2001,
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