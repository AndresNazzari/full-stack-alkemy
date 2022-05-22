import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomProvider from './context/auth.context';

import './App.css';

function App() {
    return (
        <CustomProvider>
            <Router>
                <Route exact path='/' element={<Home />} />
            </Router>
        </CustomProvider>
    );
}

export default App;
