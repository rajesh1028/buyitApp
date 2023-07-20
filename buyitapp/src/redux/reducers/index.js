import addItem from "./addItem";
import getProducts from "./products";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    addItem,
    getProducts
})

export default rootReducers;