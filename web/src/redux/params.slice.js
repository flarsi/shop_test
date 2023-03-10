import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialStateParams";

const paramsSlice = createSlice({
    name: 'params',
    initialState: initialState,
    reducers: {
        orderChange(state, {payload}) {
            state.params.page = 1;
            state.params.order = payload
        },

        sortChange(state, {payload}) {
            state.params.page = 1;
            state.params.sort = payload
        },

        pageChange(state, {payload}) {
            state.params.page = payload
        },

        colorChange(state, {payload}) {
            state.params.page = 1;
            if (state.params.color.includes(payload)){
                state.params.color = state.params.color.filter(item => item !== payload);
                return
            }
            state.params.color.push(payload)
        },

        minPriceChange(state, {payload}) {
            state.params.page = 1;
            state.params.minPrice = payload
        },

        maxPriceChange(state, {payload}) {
            state.params.page = 1;
            state.params.maxPrice = payload
        },
        
        searchChange(state, {payload}) {
            state.params.page = 1;
            state.params.search = payload
        },
    },
})

export const {orderChange, sortChange, pageChange, colorChange, minPriceChange, maxPriceChange, searchChange} = paramsSlice.actions;
export const paramsReducer = paramsSlice.reducer