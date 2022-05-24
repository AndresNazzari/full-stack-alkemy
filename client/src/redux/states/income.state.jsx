import { createSlice } from '@reduxjs/toolkit';
import { FetchState } from '../../constants/fetchState';

export const incomeEmptyState = {
    incomes: [],
    fetchState: FetchState.NOT_FETCHED,
    error: null,
};

export const incomeSlice = createSlice({
    name: 'income',
    initialState: incomeEmptyState,
    reducers: {
        createIncome: (state, action) => {},
        removeIncome: (state, action) => {},
    },
});

export const { createIncome, removeIncome } = incomeSlice.actions;

export default incomeSlice.reducer;
