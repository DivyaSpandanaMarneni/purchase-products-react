import {applyMiddleware, combineReducers, createStore, Reducer, Store} from "redux";
import thunk from "redux-thunk";
import {itemsReducer} from "../items-state/items-state-reducer";
import {IItemState} from "../items-state/item-actions";


export interface IApplicationState {
    itemsState: IItemState;
}

const rootReducer: Reducer<IApplicationState> = combineReducers<IApplicationState>({
    itemsReducer: itemsReducer,
});

export default function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

    // @ts-ignore
    return store;

}



