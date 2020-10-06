export const INCREMENT_ASYNC = "INCREMENT_ASYNC";
export const DECREMENT_ASYNC = "DECREMENT_ASYNC";

export interface IIncrementAsyncAction {
    type: typeof INCREMENT_ASYNC;
}

export interface IDecrementAsyncAction {
    type: typeof DECREMENT_ASYNC;
}

export type IAction = IIncrementAsyncAction | IDecrementAsyncAction;
