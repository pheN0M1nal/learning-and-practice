import wishesReducer from "./wishesReducer";
import favReducer from "./favReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    wishes: wishesReducer,
    favroties: favReducer
});

export default allReducers;