import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import ProfileSelection from './components/User/ProfileSelection';
import MainPage from './components/User/MainPage';
import AdminPage from './components/Admin/AdminPage';
import AddActor from './components/Admin/AddActor';
import AddContent from './components/Admin/AddContent';
import AddDirectorctor from './components/Admin/AddDirector';


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
                    <Route
                        path="/admin/add-content"
                        element={
                            <AdminRoute>
                                <AddContent />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="/admin/add-actor"
                        element={
                            <AdminRoute>
                                <AddActor />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="/admin/add-director"
                        element={
                            <AdminRoute>
                                <AddDirector />
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