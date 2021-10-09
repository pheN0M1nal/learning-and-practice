import itemReducer from './itemsReducer';
import orderReducer from './orderReducer';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    items: itemReducer,
    orders: orderReducer
});

export default allReducers;