import { createSlice } from '@reduxjs/toolkit';

export const UserEmptyState = {
    user_id: '',
    name: '',
    email: '',
    avatar: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState: UserEmptyState,
    reducers: {
        createUser: (state, action) => {
            return action.payload;
        },
        resetUser: (state, action) => {
            return UserEmptyState;
        },
    },
});

export const { createUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
