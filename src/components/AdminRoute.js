import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
    const { auth } = useAuth();

    // Si no está autenticado o no es admin (rol !== 2), redirigir al login
    if (!auth.userId || auth.rol !== 2) {
        return <Navigate to="/login" replace />;
    }

    // Si es administrador, renderizar el contenido protegido
    return children;
};

export default AdminRoute;
