import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "../../axios";
import axios from "axios";

export const fetchTransactions = createAsyncThunk("transactions/fetchTransactions", async () => {
    const { data } = await axios.get('https://wallet-project.cyclic.app/api-docs/transactions')
    return data
})




const initialState = {
    transactions: {
        items: [],
        status:'loading'
    }
 
    
}


const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,

    extraReducers: {
       [fetchTransactions.pending]: (state) => {
            state.transactions.items = [];
            state.transactions.status = 'loading'
        },
        [fetchTransactions.fulfilled]: (state, action) => {
            state.transactions.status = 'loaded';
            state.transactions.items = action.payload;
        },
          [fetchTransactions.rejected]: (state) => {
            state.transactions.status = 'error';
            state.transactions.items = [];
        }  
    }
})

export const transactionsReducer = transactionsSlice.reducer; 