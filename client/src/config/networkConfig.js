import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: Number(60000),
});

api.CancelToken = axios.CancelToken;
api.isCancel = axios.isCancel;

export { api };

const defaultTokenExtractor = (state) => ({
    userToken: state.userReducer.userToken,
});

export const authenticationProvider = (
    store,
    authAction,
    tokenExtractor = defaultTokenExtractor,
    authType = 'Bearer'
) => {
    // Binds userToken field to axios requests
    api.interceptors.request.use((config) => {
        const { userToken } = tokenExtractor(store.getState());
        if (!userToken) return config;
        config.headers.Authorization = `${authType} ${userToken}`;
        return config;
    });

    // Handles redirect on status code 401
    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (
                error.config &&
                error.response &&
                error.response.status === 401 &&
                authAction
            ) {
                //TODO: redirect user to logout page
            }

            return Promise.reject(error);
        }
    );
};
