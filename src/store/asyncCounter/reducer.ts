import { INCREMENT_ASYNC, DECREMENT_ASYNC, IAction } from "./action-types";

export interface IAsyncCounterState {
    counter: number;
}

const defaultState: IAsyncCounterState = {
    counter: 0,
};

export function asyncCounter(
    state = defaultState,
    payload: IAction
): IAsyncCounterState {
    switch (payload.type) {
        case INCREMENT_ASYNC:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT_ASYNC:
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}
