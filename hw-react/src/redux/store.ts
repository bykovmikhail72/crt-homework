import { configureStore } from "@reduxjs/toolkit";

import counter from "./counterSlice/counterSlice"

export const store = configureStore({
    reducer: counter,
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
