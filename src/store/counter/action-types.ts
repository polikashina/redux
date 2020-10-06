export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export interface IIncrementAction {
    type: typeof INCREMENT;
}

export interface IDecrementAction {
    type: typeof DECREMENT;
}

export type IAction = IIncrementAction | IDecrementAction;
