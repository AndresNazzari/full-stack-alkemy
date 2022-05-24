import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './states/user.state';
import { expenseSlice } from './states/expense.state';
import { incomeSlice } from './states/income.state';
import { categorySlice } from './states/category.state';

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        expense: expenseSlice.reducer,
        income: incomeSlice.reducer,
        category: categorySlice.reducer,
    },
});
