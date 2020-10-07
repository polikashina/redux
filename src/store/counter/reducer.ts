import { incrementAction, decrementAction } from "./actions";
import { createReducer } from "redux-act";

export interface ICounterState {
    counter: number;
}

const defaultState: ICounterState = {
    counter: 0,
};

export const counter = createReducer<typeof defaultState>({}, defaultState);
counter.on(incrementAction, (state: ICounterState) => ({
    ...state,
    counter: state.counter + 1,
}));
counter.on(decrementAction, (state: ICounterState) => ({
    ...state,
    counter: state.counter - 1,
}));
