import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

import './styles/styles.css';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Ruta pública para Login */}
                    <Route path="/login" element={<Login />} />

                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;