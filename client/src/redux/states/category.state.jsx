import { createSlice } from '@reduxjs/toolkit';
import { FetchState } from '../../constants/fetchState';

export const initialState = {
    categories: [],
    fetchState: FetchState.NOT_FETCHED,
    error: null,
};

export const categorySlice = createSlice({
    name: 'categoryReducer',
    initialState: initialState,
    reducers: {
        createCategory: (state, action) => {},
        removeCategory: (state, action) => {},
    },
});

export const { createCategory, removeCategory } = categorySlice.actions;

export default categorySlice.reducer;
