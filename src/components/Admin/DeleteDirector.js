import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DirectorsApi from '../../api/client_content/src/api/DirectorsApi';
import ApiClient from '../../api/client_content/src/ApiClient';
import NavBarAdmin from "../NavBarAdmin";
import "../../styles/deleteStyles.css";

function DeleteDirector() {
    const [directorId, setDirectorId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const location = useLocation(); // Hook to access the passed state

    const apiClient = new ApiClient();
    const directorsApi = new DirectorsApi(apiClient);

    const handleDeleteDirector = async () => {
        try {
            await new Promise((resolve, reject) => {
                directorsApi.deleteDirector(parseInt(directorId), (error, data, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            setSuccessMessage('Director deleted successfully.');
            setDirectorId('');
            setTimeout(() => window.location.reload(), 2000); // Reload after 2 seconds
        } catch (error) {
            setErrorMessage('Error deleting director. Please try again.');
            console.error('Delete director error:', error);
        }
    };

    // Fetch director ID from location state and set it automatically
    useEffect(() => {
        const idFromState = location.state?.directorId;
        if (idFromState) {
            setDirectorId(idFromState);
        }
    }, [location.state]);

    return (
        <div>
            <NavBarAdmin />
            <div className="containerLessPadding">
                <h1>Delete Director</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <div className="input-section">
                    <label>Director ID</label>
                    <input
                        type="text"
                        value={directorId}
                        onChange={(e) => setDirectorId(e.target.value)}
                    />
                </div>
                <button onClick={handleDeleteDirector}>Delete Director</button>
            </div>
        </div>
    );
}

export default DeleteDirector;
