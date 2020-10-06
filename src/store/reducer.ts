import { counter, ICounterState } from "./counter/reducer";
import { asyncCounter, IAsyncCounterState } from "./asyncCounter/reducer";
import { configureStore } from "@reduxjs/toolkit";

export interface IAppState {
    counter: ICounterState;
    asyncCounter: IAsyncCounterState;
}

export const store = configureStore({
    reducer: {
        counter: counter.reducer,
        asyncCounter: asyncCounter.reducer,
    },
});
