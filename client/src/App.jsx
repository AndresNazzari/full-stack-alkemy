import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import setAuthToken from './util/setAuthToken';
import { loadUserAction, logout } from './redux/actions/user.action';
import { setToken } from './redux/states/user.state';
import PrivateRoute from './routing/PrivateRoute';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Error from './components/Error';

if (localStorage.userToken) {
    setAuthToken(localStorage.userToken);
    store.dispatch(setToken({ userToken: localStorage.userToken }));
}

function App() {
    useEffect(() => {
        store.dispatch(loadUserAction());
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Login />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/home' element={<PrivateRoute />}>
                        <Route exact path='/home' element={<Home />} />
                    </Route>
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
