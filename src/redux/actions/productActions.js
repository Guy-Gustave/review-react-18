import { ActionType } from "../constants/actionType"

export const setProducts = (products) => {
    return {
        type : ActionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (product) => {
    return {
        type : ActionType.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeProducts = (product) => {
    return {
        type : ActionType.REMOVE_PRODUCT,
        payload: product
    }
}