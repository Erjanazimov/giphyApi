import {INSIDE_CATEGORY} from "./type";


const initialState = {
    categoriesInside: [],

}
export const insideCategoryReducer = (state = initialState, action) => {
    switch (action.type){
        case INSIDE_CATEGORY:
            return {
                ...state,
                categoriesInside: action.data
            }
        default:
            return state;
    }
}