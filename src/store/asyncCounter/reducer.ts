import { createSlice } from "@reduxjs/toolkit";
import { incrementActionAsync, decrementActionAsync } from "./actions";

export interface IAsyncCounterState {
    counter: number;
}

const initialState: IAsyncCounterState = {
    counter: 0,
};

export const asyncCounter = createSlice({
    name: "asyncCounter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                incrementActionAsync.fulfilled,
                (state: IAsyncCounterState) => {
                    state.counter++;
                }
            )
            .addCase(
                decrementActionAsync.fulfilled,
                (state: IAsyncCounterState) => {
                    state.counter--;
                }
            );
    },
});
