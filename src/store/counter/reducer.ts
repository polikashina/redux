import { INCREMENT, DECREMENT, IAction } from "./action-types";

export interface ICounterState {
    counter: number;
}

const defaultState: ICounterState = {
    counter: 0,
};

export function counter(state = defaultState, payload: IAction): ICounterState {
    switch (payload.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT:
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}
