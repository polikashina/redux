import { createReducer } from "@reduxjs/toolkit";
import { decrementAction, incrementAction } from "./actions";

export interface ICounterState {
    counter: number;
}

const defaultState: ICounterState = {
    counter: 0,
};

export const counter = createReducer(defaultState, (builder) => {
    builder
        .addCase(incrementAction, (state, action) => {
            state.counter++;
        })
        .addCase(decrementAction, (state, action) => {
            state.counter--;
        })
        .addDefaultCase((state, action) => {});
});
