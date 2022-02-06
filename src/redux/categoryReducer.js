import {CATEGORY_STATE, RANDOM_SCROLL} from "./type";


const initialState = {
    categories: [],

}
export const categoryReducer = (state = initialState, action) => {
    switch (action.type){
        case CATEGORY_STATE:
            return {
                ...state,
                categories: action.data
            }
        default:
            return state;
    }
}