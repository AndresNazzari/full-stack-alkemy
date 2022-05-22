import { createAction } from 'redux-actions';
import { v4 as uuidv4 } from 'uuid';

export const createAlert = createAction('CREATE_ALERT');
export const removeAlert = createAction('REMOVE_ALERT');

export const setAlert =
    (msg, alertType, timeout = 5000) =>
    (dispatch) => {
        dispatch(createAlert({ msg, alertType, id: uuidv4() }));
        setTimeout(() => dispatch(removeAlert()), timeout);
    };

export const clearAlert = () => (dispatch) => {
    dispatch(removeAlert());
};
