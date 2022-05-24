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
    name: 'userReducer',
    initialState: initialState,
    reducers: {
        clearLogin: (state, action) => {
            localStorage.removeItem('token');
            return initialState;
        },
        requestLogin: (state, action) => ({
            ...state,
            fetchState: FetchState.FETCHING,
        }),
        requestLoginSuccess: (state, action) => {
            localStorage.setItem('userToken', action.payload.token);
            return {
                ...state,
                userToken: action.payload.token,
                isAuthenticated: true,
                fetchState: FetchState.FETCHED,
            };
        },
        requestLoadSuccess(state, action) {
            return {
                ...state,
                ...action.payload.user,
                isAuthenticated: true,
                fetchState: FetchState.FETCHED,
            };
        },
        setToken: (state, action) => ({
            ...state,
            userToken: action.payload.userToken,
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
    clearLogin,
    requestLogin,
    requestLoginSuccess,
    requestLoadSuccess,
    setToken,
    requestLoginFailed,
} = userSlice.actions;

export default userSlice.reducer;
