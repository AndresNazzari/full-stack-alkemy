import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
    rootReducers,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [composeEnhancers],
});
