import { createSlice } from '@reduxjs/toolkit';
import { FetchState } from '../../constants/fetchState';

export const initialState = {
    expenses: [],
    fetchState: FetchState.NOT_FETCHED,
    error: null,
};

export const expenseSlice = createSlice({
    name: 'expenseReducer',
    initialState: initialState,
    reducers: {
        createExpense: (state, action) => {},
        removeExpense: (state, action) => {},
    },
});

export const { createExpense, removeExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
