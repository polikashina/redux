import React, { useCallback } from "react";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "./store/reducer";
import { incrementAction, decrementAction } from "./store/actions";
import "./App.css";

function App() {
    const counter = useSelector((state: IAppState) => state.counter);
    const dispatch = useDispatch();
    const increment = useCallback(() => dispatch(incrementAction()), [
        dispatch,
    ]);
    const decrement = useCallback(() => dispatch(decrementAction()), [
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
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
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
