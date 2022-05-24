import { createSlice } from '@reduxjs/toolkit';
import { FetchState } from '../../constants/fetchState';

export const initialState = {
    user_id: '',
    name: '',
    email: '',
    avatar: '',
    userToken: null,
    isAuthenticated: false,
    fetchState: FetchState.NOT_FETCHED,
    error: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        clearToken: (state, action) => initialState,
        requestLogin: (state, action) => ({
            ...state,
            fetchState: FetchState.FETCHING,
        }),
        requestLoginSuccess: (state, action) => ({
            ...state,
            ...action.payload,
            userToken: action.payload.userToken,
            isAuthenticated: true,
            fetchState: FetchState.FETCHED,
        }),
        requestLoginFailed: (state, action) => {
            localStorage.removeItem('userToken');
            return {
                ...state,
                isAuthenticated: false,
                userToken: null,
                error: { ...state.error, ...action.payload },
                fetchState: FetchState.FETCHED,
            };
        },
    },
});

export const {
    clearToken,
    requestLogin,
    requestLoginSuccess,
    requestLoginFailed,
} = userSlice.actions;

export default userSlice.reducer;
