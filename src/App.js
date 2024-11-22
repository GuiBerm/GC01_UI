import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import ProfileSelection from './components/User/ProfileSelection';

import ProtectedRoute from './components/ProtectedRoute'; // Rutas protegidas
import './styles/styles.css';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Ruta pública para Login */}
                    <Route path="/login" element={<Login />} />

                    {/* Rutas protegidas para usuarios autenticados */}
                    <Route
                        path="/user/profile"
                        element={
                            <ProtectedRoute>
                                <ProfileSelection />
                            </ProtectedRoute>
                        }
                    />
                    />
                    <Route
                        path="/logout"
                        element={
                            <ProtectedRoute>
                                <Logout />
                            </ProtectedRoute>
                        }
                    />

                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;