import {applyMiddleware, combineReducers, createStore, Reducer, Store} from "redux";
import thunk from "redux-thunk";
import {itemsReducer} from "../items-state/items-state-reducer";
import {IItemState} from "../items-state/item-actions";


export interface IApplicationState {
    itemsState: IItemState;
}

const rootReducer = combineReducers({
    items: itemsReducer
});

const initialState: IApplicationState = {
    itemsState: {
        items: [],
        itemsLoading: false
    }
}


export default function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer, null, applyMiddleware(thunk));

    // @ts-ignore
    return store;

}



