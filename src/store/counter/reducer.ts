import { createSlice } from "@reduxjs/toolkit";
import { decrementAction, incrementAction } from "./actions";

export interface ICounterState {
    counter: number;
}

const initialState: ICounterState = {
    counter: 0,
};

export const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(incrementAction, (state: ICounterState) => {
                state.counter++;
            })
            .addCase(decrementAction, (state: ICounterState) => {
                state.counter--;
            })
            .addDefaultCase((state: ICounterState) => {});
    },
});
