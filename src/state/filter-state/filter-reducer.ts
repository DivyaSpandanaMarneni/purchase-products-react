import {Reducer} from "redux";
import {
    FilterActions,
    ICreateFilterAction,
    IFilterState,
    IGetAllItemsAction,
    IPostByFilterAction
} from "./filter-actions";
import {FilterActionTypes} from "./filter-types";

export const initialFilterState: IFilterState = {
    items: {
        products: [],
        filterCriteria: null,
        currentPage: 0,
        productCount: 0
    },
    filter: {
        searchKey: null, // text from product name
        category: null,
        priceRange: null,
        savings: null,
        sortBy: null, // price and savings
        pageIndex: 0,
        pageSize: 0
    }
}


export const filterReducer: Reducer<IFilterState, FilterActions> = (
    state = initialFilterState,
    action
) => {
    switch ((action as FilterActions).type) {

        case FilterActionTypes.GETALL:
            console.log('filter action types get all');
            return {
                ...state,
                items: (action as IGetAllItemsAction).items
            }
        case FilterActionTypes.POSTBYFILTER:
            return {
                ...state,
                items: (action as IPostByFilterAction).items
            }
        case FilterActionTypes.CREATEFILTER:
            return {
                ...state,
                filter: (action as ICreateFilterAction).filter
            }
    }

    return state;
}