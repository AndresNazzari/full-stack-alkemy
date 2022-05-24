import { createSlice } from '@reduxjs/toolkit';
import { FetchState } from '../../constants/fetchState';

export const expenseEmptyState = {
    expenses: [],
    fetchState: FetchState.NOT_FETCHED,
    error: null,
};

export const expenseSlice = createSlice({
    name: 'expense',
    initialState: expenseEmptyState,
    reducers: {
        createExpense: (state, action) => {},
        removeExpense: (state, action) => {},
    },
});

export const { createExpense, removeExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
