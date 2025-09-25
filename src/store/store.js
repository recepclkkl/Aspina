import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import logger from "redux-logger";
import clientReducer from "../store/clientReducer.js";
import productReducer from "../store/productReducer.js";
import cartReducer from "../store/cartReducer.js";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;