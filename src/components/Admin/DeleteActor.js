import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ActorsApi from '../../api/client_content/src/api/ActorsApi';
import ApiClient from '../../api/client_content/src/ApiClient';
import NavBarAdmin from "../NavBarAdmin";
import "../../styles/modifyStyles.css";

function DeleteActor() {
    const location = useLocation();
    const [actorId, setActorId] = useState(location.state?.actorId || '');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const apiClient = new ApiClient();
    const actorsApi = new ActorsApi(apiClient);

    const handleDeleteActor = async () => {
        try {
            await new Promise((resolve, reject) => {
                actorsApi.deleteActor(parseInt(actorId), (error) => {
                    if (error) reject(error);
                });
            });
            setSuccessMessage('Actor deleted successfully.');
            setTimeout(() => window.location.reload(), 2000); // Reload after 2 seconds
        } catch (error) {
            setErrorMessage('Error deleting actor. Please try again.');
            console.error('Error deleting actor:', error);
        }
    };

    useEffect(() => {
        if (actorId) {
            setActorId(location.state.actorId);
        }
    }, [location.state]);

    return (
        <div>
            <NavBarAdmin />
            <div className="containerLessPadding">
                <h1>Delete Actor</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <div className="search-section">
                    <input
                        type="text"
                        placeholder="Actor ID"
                        value={actorId}
                        onChange={(e) => setActorId(e.target.value)}
                    />
                    <button onClick={handleDeleteActor}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteActor;
