import {
    IIncrementAction,
    IDecrementAction,
    INCREMENT,
    DECREMENT,
} from "./action-types";

export const incrementAction: IIncrementAction = {
    type: INCREMENT,
};

export const decrementAction: IDecrementAction = {
    type: DECREMENT,
};
