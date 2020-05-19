import {Reducer} from "redux";
import {IItemState, ItemsActions} from "./item-actions";
import {ItemActionTypes} from "./item-types";


const initialItemsState: IItemState = {
    items: [],
    itemsLoading: false
}

export const itemsReducer: Reducer<IItemState, ItemsActions> = (
    state:IItemState = initialItemsState,
    action
) => {

    switch ((action).type) {
        case (ItemActionTypes.LOADING):
            return {
                ...state,
                itemsLoading: true
            }

        case (ItemActionTypes.GETALL):
            return {
                ...state,
                items: action.items,
                itemsLoading: false
            }

        default:
            return state;
    }
}