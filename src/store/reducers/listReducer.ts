import { ListActionTypes } from "../constants";
import { Reducer } from "redux";

export interface ListState {
    readonly list: any;
    readonly is_loading: boolean;
    readonly error_message?: string;
}

export const initialState: ListState = {
    list: [],
    is_loading: false,
};

export const listReducer: Reducer<ListState> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ListActionTypes.GET_LIST_PENDING: {
            state = { ...state, is_loading: true };
            break;
        }
        case ListActionTypes.GET_LIST_FULFILLED: {
            state = {
                ...state,
                list: action.payload.data,
                is_loading: false,
            };
            break;
        }
        case ListActionTypes.GET_LIST_REJECTED: {
            state = {
                list: [],
                error_message: action.payload.message,
                is_loading: false,
            };
            break;
        }
        default: {
            state = { ...state };
        }
    }
    return state;
};
