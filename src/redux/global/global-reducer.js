import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeModalStatus } from './global-actions';

const isModalAddTransactionOpen = createReducer(false, {
  [changeModalStatus]: (state, action) => (state = action.payload),
});

export default combineReducers({
  isModalAddTransactionOpen,
});
