import {applyMiddleware, combineReducers, createStore} from "redux";
import {IFilterState} from "../filter-state/filter-actions";
import {filterReducer} from "../filter-state/filter-reducer";

import thunk from "redux-thunk";


export interface IApplicationState {
    filterState: IFilterState;
}

const rootReducer = combineReducers({
    filter: filterReducer
});

// const initialState: IApplicationState = {
//     filterState: {
//         items: {
//           products: [],
//           filterCriteria: null,
//           productCount: 0,
//           currentPage: 0
//         },
//         filter: {
//             searchKey: null, // text from product name
//             category: null,
//             priceRange: null,
//             savings: null,
//             sortBy: null, // price and savings
//             pageIndex: 0,
//             pageSize: 0
//         }
//     }
// }

const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
export default store;



