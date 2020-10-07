import React, { useCallback } from "react";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "./store/reducer";
import { counterSlice } from "./store/counter/reducer";
import {
    incrementActionAsync,
    decrementActionAsync,
} from "./store/asyncCounter/actions";
import "./App.css";

function App() {
    const counter = useSelector((state: IAppState) => state.counter.counter);
    const counterAsync = useSelector(
        (state: IAppState) => state.asyncCounter.counter
    );
    const dispatch = useDispatch();
    const { actions } = counterSlice;
    const { increment, decrement } = actions;
    const handleIncrement = useCallback(() => dispatch(increment()), [
        dispatch,
        increment,
    ]);
    const handleDecrement = useCallback(() => dispatch(decrement()), [
        decrement,
        dispatch,
    ]);

    const incrementThunk = useCallback(() => dispatch(incrementActionAsync()), [
        dispatch,
    ]);
    const decrementThunk = useCallback(() => dispatch(decrementActionAsync()), [
        dispatch,
    ]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Counter <b>{counter}</b>
                </p>
                <p>
                    <button onClick={handleIncrement}>+</button>
                    <button onClick={handleDecrement}>-</button>
                </p>
                <p>
                    Counter async <b>{counterAsync}</b>
                </p>
                <p>
                    <button onClick={incrementThunk}>+</button>
                    <button onClick={decrementThunk}>-</button>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
