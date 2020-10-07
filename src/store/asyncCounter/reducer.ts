import {
    incrementAction,
    incrementActionSuccess,
    decrementAction,
    decrementActionSuccess,
} from "./actions";
import { createReducer } from "redux-act";

export interface IAsyncCounterState {
    counter: number;
    inProgress: boolean;
}

const defaultState: IAsyncCounterState = {
    counter: 0,
    inProgress: false,
};

export const asyncCounter = createReducer<typeof defaultState>(
    {},
    defaultState
);
asyncCounter.on(incrementAction, (state: IAsyncCounterState) => ({
    ...state,
    inProgress: true,
}));
asyncCounter.on(incrementActionSuccess, (state: IAsyncCounterState) => ({
    ...state,
    counter: state.counter + 1,
    inProgress: false,
}));
asyncCounter.on(decrementAction, (state: IAsyncCounterState) => ({
    ...state,
    inProgress: true,
}));
asyncCounter.on(decrementActionSuccess, (state: IAsyncCounterState) => ({
    ...state,
    counter: state.counter - 1,
    inProgress: false,
}));
