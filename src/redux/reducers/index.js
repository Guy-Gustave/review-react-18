import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer";

const reducer = combineReducers({
    allProducts: productReducer,
})
export default reducer