import { createSlice } from "@reduxjs/toolkit";

export interface ICounterState {
    counter: number;
}

const initialState: ICounterState = {
    counter: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state: ICounterState) => {
            state.counter++;
        },
        decrement: (state: ICounterState) => {
            state.counter--;
        },
    },
});
