import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import incomeReducer from "./reducers/incomeReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk, logger];
const store = createStore(
	incomeReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
