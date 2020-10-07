import { Dispatch } from "redux";
import { createAction } from "redux-act";

export const incrementAction = createAction();
export const incrementActionSuccess = createAction();

export const decrementAction = createAction();
export const decrementActionSuccess = createAction();

export const incrementActionAsync = () => async (dispatch: Dispatch) => {
    dispatch(incrementAction());
    setTimeout(() => dispatch(incrementActionSuccess()), 100);
};

export const decrementActionAsync = () => async (dispatch: Dispatch) => {
    dispatch(decrementAction());
    setTimeout(() => dispatch(decrementActionSuccess()), 100);
};
