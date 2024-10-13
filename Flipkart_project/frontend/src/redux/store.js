import { createStore, combineReducers, applyMiddleware} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import { getProductReducers, getProductDetailReducers } from "./reducers/productReducers.js";
import { cartReducer } from "./reducers/cartReducer.js"

const reducer = combineReducers({
    getProducts: getProductReducers,
    getProductDetail: getProductDetailReducers,
    cart: cartReducer,
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;