import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialStatePromotions";
import {  fetchPromotions } from "./promotions.thunk";


const handlePending = state => {
    state.promotions.loading = true;
};

const handleRejected = (state, {payload: [data]}) => {
    state.promotions.loading = false;
    state.promotions.error = data;
};

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState: initialState,
    extraReducers: builder => {
        builder.addCase(fetchPromotions.pending, handlePending)
        .addCase(fetchPromotions.rejected, handleRejected)
        .addCase(fetchPromotions.fulfilled, (state, {payload: [data, total]}) => {
            state.promotions.loading = false;
            state.promotions.total = total;
            state.promotions.data = data;
        })
    }
})

export const promotionsReducer = promotionsSlice.reducer;
