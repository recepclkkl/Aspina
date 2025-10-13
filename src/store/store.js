// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import clientReducer from "../store/clientReducer.js";
import productReducer from "../store/productReducer.js";
import cartReducer from "../store/cartReducer.js";

const thunk = ({ dispatch, getState }) => (next) => (action) =>
  typeof action === "function" ? action(dispatch, getState) : next(action);

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
