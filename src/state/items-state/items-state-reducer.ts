import {Reducer} from "redux";
import {IItemsGetAllAction, IItemState, ItemsActions} from "./item-actions";
import {ItemActionTypes} from "./item-types";


const initialItemsState: IItemState = {
    items: [],
    itemsLoading: false
}

export function itemsReducer (
    state:IItemState = initialItemsState,
    action: any
): IItemState {

    switch ((action as ItemsActions).type) {
        case (ItemActionTypes.LOADING):
            return {
                ...state,
                itemsLoading: true
            }

        case (ItemActionTypes.GETALL):
            return {
                ...state,
                items: (action as IItemsGetAllAction).items,
                itemsLoading: false
            }

        default:
            return state;
    }
}