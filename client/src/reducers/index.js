import { combineReducers } from 'redux';
import alertsReducer from './alerts.reducer.js';

const allReducers = combineReducers({ alertsReducer });

export default (state, action) => {
    return allReducers(state, action);
};
