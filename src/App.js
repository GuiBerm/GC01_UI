import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import ProfileSelection from './components/User/ProfileSelection';
import MainPage from './components/User/MainPage';
import AdminPage from './components/Admin/AdminPage';

import AdminRoute from './components/AdminRoute'; // Rutas de admin
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
                    <Route
                        path="/user/main"
                        element={
                            <ProtectedRoute>
                                <MainPage />
                            </ProtectedRoute>
                        }
                    />

                    {/* Rutas protegidas para administradores */}
                    <Route
                        path="/admin"
                        element={
                            <AdminRoute>
                                <AdminPage />
                            </AdminRoute>
                        }
                    />

                    {/* Redirigir a /login por defecto */}
                    <Route path="*" element={<Login />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;