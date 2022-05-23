import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomProvider from './context/auth.context';
import PrivateRoute from './routing/PrivateRoute';
import Index from './components/index/Index';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Error from './components/Error';

function App() {
    return (
        <CustomProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Index />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/home' element={<PrivateRoute />}>
                        <Route exact path='/home' element={<Home />} />
                    </Route>
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </CustomProvider>
    );
}

export default App;
