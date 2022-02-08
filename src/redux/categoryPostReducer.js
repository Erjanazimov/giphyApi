import {CATEGORY_POST} from "./type";


const initialState = {
    categoriesPost: [],

}
export const categoryPostReducer = (state = initialState, action) => {
    switch (action.type){
        case CATEGORY_POST:
            return {
                ...state,
                categoriesPost: action.data
            }
        default:
            return state;
    }
}