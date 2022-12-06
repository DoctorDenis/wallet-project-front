import { configureStore } from "@reduxjs/toolkit";
import  combineReducers  from "./global/global-reducer";
import {transactionsReducer} from './slices/transactions'

 const store = configureStore({
   reducer: {
        global: combineReducers,
        transactions: transactionsReducer
    },
 });

 export default store;