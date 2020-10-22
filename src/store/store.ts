import { createStore, combineReducers, applyMiddleware } from "redux";

import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import { listReducer, ListState } from "./reducers/listReducer";

export interface AppState {
    list: ListState;
}

const rootReducer = combineReducers<AppState, any>({
    list: listReducer,
});
const configureStore = () => {
    const initialState = {};
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(promise, thunk, logger)
    );
    return store;
};
export default configureStore;
