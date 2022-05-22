import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
    return (
        <CustomProvider>
            <Router>
                <Routes></Routes>
            </Router>
        </CustomProvider>
    );
}

export default App;
