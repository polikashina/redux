import { createReducer } from "@reduxjs/toolkit";
import { decrementAction, incrementAction } from "./actions";

export interface IAsyncCounterState {
    counter: number;
}

const defaultState: IAsyncCounterState = {
    counter: 0,
};

export const asyncCounter = createReducer(defaultState, (builder) => {
    builder
        .addCase(incrementAction, (state, action) => {
            state.counter++;
        })
        .addCase(decrementAction, (state, action) => {
            state.counter--;
        })
        .addDefaultCase((state, action) => {});
});
