import { createAsyncThunk } from "@reduxjs/toolkit";

const timeoutPromise = (timeout: number) =>
    new Promise((resolve) => setTimeout(resolve, timeout));

export const incrementActionAsync = createAsyncThunk("INCREMENT", async () => {
    await timeoutPromise(100);
});

export const decrementActionAsync = createAsyncThunk("DECREMENT", async () => {
    await timeoutPromise(100);
});
