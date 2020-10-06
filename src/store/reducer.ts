import { INCREMENT, DECREMENT, IAction } from "./action-types";

export interface IAppState {
    counter: number;
}

const defaultState: IAppState = {
    counter: 0,
};

export function Reducer(state = defaultState, payload: IAction): IAppState {
    switch (payload.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT:
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}
