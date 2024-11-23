import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProfileSelection from './components/User/ProfileSelection';
import MainPage from './components/User/MainPage';
import ContentDetails from './components/User/ContentDetails';
import AdminPage from './components/Admin/AdminPage';
import AddContent from './components/Admin/AddContent';
import ModifyContent from './components/Admin/ModifyContent';
import DeleteContent from './components/Admin/DeleteContent';
import ShowActor from './components/Admin/ShowActor';
import AddActor from './components/Admin/AddActor';
import ModifyActor from './components/Admin/ModifyActor';
import DeleteActor from './components/Admin/DeleteActor';
import ShowDirector from "./components/Admin/ShowDirector";
import AddDirector from './components/Admin/AddDirector';
import ModifyDirector from './components/Admin/ModifyDirector';
import DeleteDirector from './components/Admin/DeleteDirector';
import ShowUsers from './components/Admin/ShowUsers';
import PlayPage from './components/User/PlayPage';
import Logout from './components/Logout';
import SearchPage from './components/User/SearchPage'; // Importar la nueva página
import DeleteUser from './components/Admin/DeleteUser';



import ProtectedRoute from './components/ProtectedRoute'; // Rutas protegidas
import AdminRoute from './components/AdminRoute'; // Rutas de admin
import { AuthProvider } from './context/AuthContext';
import './styles/styles.css';

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
                    <Route
                        path="/user/main"
                        element={
                            <ProtectedRoute>
                                <MainPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/user/content/:id"
                        element={
                            <ProtectedRoute>
                                <ContentDetails />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/play/:id"
                        element={
                            <ProtectedRoute>
                                <PlayPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/logout"
                        element={
                            <ProtectedRoute>
                                <Logout />
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
                        path="/admin/modify-content"
                        element={
                            <AdminRoute>
                                <ModifyContent />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="/admin/delete-content"
                        element={
                            <AdminRoute>
                                <DeleteContent />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="/admin/show-actor"
                        element={
                            <AdminRoute>
                                <ShowActor />
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
                        path="/admin/modify-actor"
                        element={
                            <AdminRoute>
                                <ModifyActor />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="/admin/delete-actor"
                        element={
                            <AdminRoute>
                                <DeleteActor />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="/admin/show-director"
                        element={
                            <AdminRoute>
                                <ShowDirector />
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
                    <Route
                        path="/admin/modify-director"
                        element={
                            <AdminRoute>
                                <ModifyDirector />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="/admin/delete-director"
                        element={
                            <AdminRoute>
                                <DeleteDirector />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="/admin/users"
                        element={
                            <AdminRoute>
                                <ShowUsers />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="/admin/delete-user"
                        element={
                            <AdminRoute>
                                <DeleteUser />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="/user/search"
                        element={
                            <ProtectedRoute>
                                <SearchPage />
                            </ProtectedRoute>
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
