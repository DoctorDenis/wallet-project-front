import { configureStore } from "@reduxjs/toolkit";
import  combineReducers  from "./global/global-reducer";


export const store = configureStore({
   reducer: {
        global: combineReducers,
    },
});