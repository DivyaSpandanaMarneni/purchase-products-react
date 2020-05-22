import {applyMiddleware, createStore} from "redux";
import {filterReducer} from "../filter-state/filter-reducer";

import thunk from "redux-thunk";

const store = createStore(filterReducer, undefined, applyMiddleware(thunk));
export default store;



