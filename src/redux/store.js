import { createStore } from "redux";
import rootReducer from "./index";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools());

export default store;
