import { applyMiddleware, createStore } from "redux";
import { getDataReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = getDataReducer;

export const store = createStore(rootReducer, applyMiddleware(thunk));
