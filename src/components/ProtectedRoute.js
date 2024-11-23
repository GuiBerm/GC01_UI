import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { auth } = useAuth();

    // Si no está autenticado, redirigir a /login
    if (!auth.userId) {
        return <Navigate to="/login" replace />;
    }

    // Si está autenticado, renderizar el contenido protegido
    return children;
};

export default ProtectedRoute;