import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { authenticationProvider } from './config/networkConfig';
import { logout } from './redux/actions/login.action';

import PrivateRoute from './routing/PrivateRoute';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Error from './components/Error';

authenticationProvider(store, logout);

function App() {
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
