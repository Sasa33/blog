import { combineReducers } from 'redux'
import cartoons from './cartoons'
import news from './news'

const rootReducer = combineReducers({
    cartoons,
    news
});

export default rootReducer