import {combineReducers} from "redux";
import {scrollReducer} from "./scrollReducer";
import {randomReducer} from "./randomReducer";
import {categoryReducer} from "./categoryReducer";
import {categoryPostReducer} from "./categoryPostReducer";
import {insideCategoryReducer} from "./insideCategoryReducer";

export const rootReducer = combineReducers({
    scrollReducer,
    randomReducer,
    categoryReducer,
    categoryPostReducer,
    insideCategoryReducer
})