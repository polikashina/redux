import {} from "redux-thunk";
import { Dispatch } from "redux";
import {
    IIncrementAsyncAction,
    IDecrementAsyncAction,
    INCREMENT_ASYNC,
    DECREMENT_ASYNC,
} from "./action-types";

export const incrementAction: IIncrementAsyncAction = {
    type: INCREMENT_ASYNC,
};

export const decrementAction: IDecrementAsyncAction = {
    type: DECREMENT_ASYNC,
};

export const incrementActionAsync = () => async (dispatch: Dispatch) => {
    setTimeout(() => dispatch(incrementAction), 100);
};

export const decrementActionAsync = () => async (dispatch: Dispatch) => {
    setTimeout(() => dispatch(decrementAction), 100);
};
