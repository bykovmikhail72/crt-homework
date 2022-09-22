import { createSlice } from "@reduxjs/toolkit"
import { TCountType } from "../../types/types";

const initialState: TCountType = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1
        }
    }
});

const {actions, reducer} = counterSlice;

export default reducer;

export const {increment, decrement} = actions;