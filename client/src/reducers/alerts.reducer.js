import { handleActions } from 'redux-actions';
import { createAlert } from '../actions/alerts.action';

const initialState = [];

export default handleActions(
    {
        [createAlert]: (state, { payload }) => ({
            ...state,
            ...payload,
        }),
    },
    initialState
);
