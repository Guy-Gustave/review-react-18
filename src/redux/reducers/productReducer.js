import { ActionType } from "../constants/actionType";

const initialState = {
    products: [
        {
            id: 1,
            title: 'laptop',
            category: 'electronics'
        },

        {
            id: 2,
            title: 'S9+',
            category: 'electronics'
        }
    ]
}

export const productReducer = (state = initialState , {type, payload}) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:

            return state;

        default:
            return state;
    }    
}