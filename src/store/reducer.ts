import { createReducer } from "@reduxjs/toolkit";
import { decrementAction, incrementAction } from "./actions";

export interface IAppState {
    counter: number;
}

const defaultState: IAppState = {
    counter: 0,
};

export const Reducer = createReducer(defaultState, (builder) => {
    builder
        .addCase(incrementAction, (state, action) => {
            state.counter++;
        })
        .addCase(decrementAction, (state, action) => {
            state.counter--;
        })
        .addDefaultCase((state, action) => {});
});
