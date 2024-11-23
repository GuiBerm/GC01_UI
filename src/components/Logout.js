import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/logoutStyles.css'; // Archivo CSS específico para Logout

function Logout() {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth(); // Acceder al rol del usuario

    const handleLogout = () => {
        setAuth({ userId: null, profileId: null }); // Limpiar el contexto
        localStorage.removeItem('auth'); // Opcional: limpiar localStorage si estás usando persistencia
        navigate('/login'); // Redirigir al login
    };

    const handleCancel = () => {
        // Verificar el rol y redirigir en consecuencia
        if (auth.rol === 2) {
            navigate('/admin'); // Administradores
        } else {
            navigate('/user/main'); // Usuarios regulares
        }
    };

    return (
        <div className="logout-container">
            <div className="logout-card">
                <h1 className="logout-title">Are you sure you want to log out?</h1>
                <div className="logout-actions">
                    <button className="logout-button cancel-button" onClick={handleCancel}>
                        Go Back
                    </button>
                    <button className="logout-button confirm-button" onClick={handleLogout}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Logout;
