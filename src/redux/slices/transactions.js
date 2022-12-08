import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchTransactions = createAsyncThunk("transactions/fetchTransactions", async ( ) => {
    try {
      const { data } = await axios.get('transactions/')
     return data  
    } catch (error) {
       
     throw error
    }
       
})

export const fetchAddTransactions = createAsyncThunk("transactions/fetchAddTransactions", async (params) => {
    try {
   const data =  await axios.post('transactions/add', params)
      return data  
    } catch (error) {
       
     throw error
    }
       
})



const initialState = {
 
        items: [],
        status:'loading'
    
 }


const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,

    extraReducers: {
       [fetchTransactions.pending]: (state) => {
            state.items = [];
            state.status = 'loading'
        },
        [fetchTransactions.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.items = action.payload;
        },
          [fetchTransactions.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        },
        
          
        //    [fetchAddTransactions.pending]: (state) => {
        //     state.status = 'loading';
        //     state.data = null
        // },
        [fetchAddTransactions.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        //   [fetchAddTransactions.rejected]: (state) => {
        //     state.status = 'error';
        //     state.data = null;
        // }
    }
})

export  const transactionsReducer = transactionsSlice.reducer; 