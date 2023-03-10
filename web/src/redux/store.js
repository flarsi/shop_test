import { configureStore } from "@reduxjs/toolkit";
import { promotionsReducer } from "./promotions.slice";
import { paramsReducer } from "./params.slice";


export const store = configureStore({
    reducer: {promotionsReducer, paramsReducer}
})