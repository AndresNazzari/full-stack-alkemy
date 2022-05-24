import { createSlice } from '@reduxjs/toolkit';
import { FetchState } from '../../constants/fetchState';

export const initialState = {
    incomes: [],
    fetchState: FetchState.NOT_FETCHED,
    error: null,
};

export const incomeSlice = createSlice({
    name: 'incomeReducer',
    initialState: initialState,
    reducers: {
        createIncome: (state, action) => {},
        removeIncome: (state, action) => {},
    },
});

export const { createIncome, removeIncome } = incomeSlice.actions;

export default incomeSlice.reducer;
