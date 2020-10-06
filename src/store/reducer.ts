import { combineReducers } from "@reduxjs/toolkit";
import { counter, ICounterState } from "./counter/reducer";
import { asyncCounter, IAsyncCounterState } from "./asyncCounter/reducer";

export interface IAppState {
    counter: ICounterState;
    asyncCounter: IAsyncCounterState;
}
export const rootReducer = combineReducers<IAppState>({
    counter,
    asyncCounter,
});
