import { api } from '../../config/networkConfig';
import { FetchState } from '../../constants/fetchState';
import {
    clearToken,
    requestLogin,
    requestLoginSuccess,
    requestLoginFailed,
} from '../states/user.state';

export const login = (email, password) => async (dispatch, getState) => {
    dispatch(requestLogin());

    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!re.test(email) || email === '') {
        dispatch(requestLoginFailed({ error: true }));
    } else {
        dispatch(requestLoginFailed({ error: false }));
    }
    if (password === '' || password.length < 6) {
        dispatch(requestLoginFailed({ error: true }));
    } else {
        dispatch(requestLoginFailed({ error: false }));
    }
    console.log('first');

    if (!getState().user.error.error && password !== '' && email !== '') {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const body = JSON.stringify({ email, password });
            const url = `http://localhost:8080/api/user/auth`;
            const res = await api.post(url, body, config);

            dispatch(requestLoginSuccess(res.data));
        } catch (error) {
            //ver si se puede hacer las alertas
            const errors = error.response.data.errors;
            dispatch(requestLoginFailed(errors));
        }
    }
};

export const logout = () => async (dispatch, getState) => {};

export const clearLoginError = () => (dispatch) => {
    /*  localStorage.removeItem('persist:root'); */
    dispatch(clearToken());
};
