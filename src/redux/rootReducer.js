import {combineReducers} from "redux";
import {scrollReducer} from "./scrollReducer";
import {randomReducer} from "./randomReducer";
import {categoryReducer} from "./categoryReducer";

export const rootReducer = combineReducers({
    scrollReducer,
    randomReducer,
    categoryReducer
})