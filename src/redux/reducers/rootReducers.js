import { combineReducers } from "redux";
import favorite_tv_show from "./favoriteTvShowReducer";

const rootReducers = combineReducers({
    favorite_tv_show,
});

export default rootReducers;
