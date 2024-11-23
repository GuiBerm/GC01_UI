import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import UsersApi from '../api/client_user/src/api/UsersApi';
import ApiClient from '../api/client_user/src/ApiClient';
import User from '../api/client_user/src/model/User';

import '../styles/loginStyles.css'; // Archivo CSS para estilos específicos del Login

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); // Nuevo estado para el email
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // Estado para mensajes de éxito
    const navigate = useNavigate();
    const { setAuth } = useAuth();
    const apiClient = new ApiClient();
    const usersApi = new UsersApi(apiClient);

    // Efecto para limpiar el mensaje de éxito después de 5 segundos
    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage('');
            }, 5000); // El mensaje desaparece después de 5 segundos
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const handleLogin = async () => {
        // Limpiar mensajes previos
        setErrorMessage('');
        setSuccessMessage('');

        if (!username || !password) {
            setErrorMessage('Please complete all fields.');
            return;
        }

        try {
            // Obtener usuarios desde la API
            const usersResponse = await new Promise((resolve, reject) => {
                usersApi.usersGet((error, data) => {
                    if (error) reject(error);
                    else resolve(data);
                });
            });

            // Buscar el usuario por nombre y contraseña
            const user = usersResponse.find(
                user => user.username === username && user.contrasena === password
            );

            if (user) {
                // Guardar información del usuario en el contexto
                setAuth({ userId: user.id, username: user.username, rol: user.rol });

                // Redirigir según el rol del usuario
                if (user.rol === 2) {
                    navigate('/admin');
                } else {
                    navigate('/user/profile');
                }
            } else {
                setErrorMessage('Invalid username or password.');
            }
        } catch (error) {
            setErrorMessage('An error occurred during login. Please try again.');
            console.error('Login error:', error);
        }
    };

    const handleRegister = async () => {
        // Limpiar mensajes previos
        setErrorMessage('');
        setSuccessMessage('');

        if (!username || !password || !email) { // Verificar el email también
            setErrorMessage('Please complete all fields.');
            return;
        }

        try {
            // Obtener usuarios desde la API para verificar duplicados
            const usersResponse = await new Promise((resolve, reject) => {
                usersApi.usersGet((error, data) => {
                    if (error) reject(error);
                    else resolve(data);
                });
            });

            // Verificar si el nombre de usuario ya existe
            const existingUser = usersResponse.find(user => user.username === username);

            if (existingUser) {
                setErrorMessage('The username is already in use. Please choose another.');
                return;
            }

            // Crear un nuevo usuario
            const newUser = new User();
            newUser.username = username;
            newUser.contrasena = password;
            newUser.rol = 1; // Asignar rol de usuario regular
            newUser.email = email; // Asignar el email

            // Guardar el nuevo usuario en la API
            await new Promise((resolve, reject) => {
                usersApi.usersPost(newUser, (error) => {
                    if (error) reject(error);
                    else resolve();
                });
            });

            // Establecer mensaje de éxito
            setSuccessMessage('Account successfully created. You can now log in.');
            setIsRegistering(false);
            setUsername('');
            setPassword('');
            setEmail(''); // Limpiar el campo de email
        } catch (error) {
            setErrorMessage('An error occurred during registration. Please try again.');
            console.error('Registration error:', error);
        }
    };

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
        setErrorMessage('');
        setSuccessMessage('');
        setUsername('');
        setPassword('');
        setEmail(''); // Limpiar el campo de email al cambiar de formulario
    };

    return (
        <div className="login-container">
            {/* Título ToniFlix */}
            <div className="toniflix-header">
                <h1 className="toniflix-title">ToniFlix</h1>
            </div>
            <div className="login-form">
                <h2 className="login-title">{isRegistering ? 'Register' : 'Log In'}</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>} {/* Mostrar mensaje de éxito */}



                <input
                    className="login-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />


                {isRegistering && (
                    <input
                        className="login-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                )}


                {isRegistering ? (
                    <div className="form-footer">
                        <button className="login-button" onClick={handleRegister}>Register</button>
                        <p className="toggle-text">
                            Already have an account?{' '}
                            <span className="toggle-link" onClick={toggleForm}>Log In</span>
                        </p>
                    </div>
                ) : (
                    <div className="form-footer">
                        <button className="login-button" onClick={handleLogin}>Log In</button>
                        <p className="toggle-text toggle-margin">
                            Don't have an account?{' '}
                            <span className="toggle-link" onClick={toggleForm}>Sign Up</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
