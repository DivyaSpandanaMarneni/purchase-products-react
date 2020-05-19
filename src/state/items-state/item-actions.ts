import {ItemActionTypes} from "./item-types";
import {IItem} from "../../model/IItem";
import { ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";


export interface IItemsGetAllAction {
    type: ItemActionTypes.GETALL,
    items: IItem[]
}

export interface IItemsLoadingAction {
    type: ItemActionTypes.LOADING
}

export type ItemsActions = IItemsGetAllAction | IItemsLoadingAction;


export interface IItemState {
    readonly items: IItem[];
    readonly itemsLoading: boolean;

}

const loading: ActionCreator<IItemsLoadingAction> = () => ({
    type: ItemActionTypes.LOADING
});

export const getItems: ActionCreator<ThunkAction<Promise<AnyAction>, IItemState, null, IItemsGetAllAction>> = () => {
 return async (dispatch: Dispatch) => {
     dispatch(loading());

     // @ts-ignore
     const items: IItem[] = await getItems(); // change to API or axios calls
     return dispatch({
         items,
         type: ItemActionTypes.GETALL
     });
 };
}