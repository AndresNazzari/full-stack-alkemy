import { createSlice } from '@reduxjs/toolkit';
import { FetchState } from '../../constants/fetchState';

export const categoryEmptyState = {
    categories: [],
    fetchState: FetchState.NOT_FETCHED,
    error: null,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState: categoryEmptyState,
    reducers: {
        createCategory: (state, action) => {},
        removeCategory: (state, action) => {},
    },
});

export const { createCategory, removeCategory } = categorySlice.actions;

export default categorySlice.reducer;
