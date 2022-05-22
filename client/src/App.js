import { Provider } from 'react-redux';
import { store } from './config/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes></Routes>
            </Router>
        </Provider>
    );
}

export default App;
