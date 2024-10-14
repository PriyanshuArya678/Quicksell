import { configureStore } from "@reduxjs/toolkit";
import DataSliceReducer from './DataSlice.js'
import CurrStatusSliceReducer from "./CurrStatusSlice.js";
export const store = configureStore({
    reducer:{
        data: DataSliceReducer,
        currState:CurrStatusSliceReducer,
    }
})