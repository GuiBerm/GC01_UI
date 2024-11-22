import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UsersApi from '../../api/client_user/src/api/UsersApi';
import ApiClient from '../../api/client_user/src/ApiClient';
import NavBarAdmin from "../NavBarAdmin";
import "../../styles/deleteStyles.css";

function DeleteUser() {
    const location = useLocation();
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const apiClient = new ApiClient();
    const usersApi = new UsersApi(apiClient);

    useEffect(() => {
        const idFromState = location.state?.userId;
        if (idFromState) {
            setUserId(idFromState);
        }
    }, [location.state]);

    const handleDeleteUser = async () => {
        try {
            await new Promise((resolve, reject) => {
                usersApi.usersUserIdDelete(parseInt(userId), (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });
            setSuccessMessage('User deleted successfully.');
            setTimeout(() => navigate('/admin/users'), 2000); // Navigate back after 2 seconds
        } catch (error) {
            setErrorMessage('Error deleting user. Please try again.');
            console.error('Delete user error:', error);
        }
    };

    return (
        <div>
            <NavBarAdmin />
            <div className="containerLessPadding">
                <h1>Delete User</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <div className="input-section">
                    <label>User ID</label>
                    <input
                        type="text"
                        value={userId}
                        readOnly
                    />
                </div>
                <button onClick={handleDeleteUser} className="delete-button">Confirm Delete</button>
            </div>
        </div>
    );
}

export default DeleteUser;
