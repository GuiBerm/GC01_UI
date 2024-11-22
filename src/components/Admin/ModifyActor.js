import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ActorsApi from '../../api/client_content/src/api/ActorsApi';
import ApiClient from '../../api/client_content/src/ApiClient';
import NavBarAdmin from "../NavBarAdmin";
import "../../styles/modifyStyles.css";

function ModifyActor() {
    const location = useLocation();
    const [actorId, setActorId] = useState(location.state?.actorId || '');
    const [name, setName] = useState('');
    const [biography, setBiography] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const apiClient = new ApiClient();
    const actorsApi = new ActorsApi(apiClient);

    const handleSearchActor = async () => {
        try {
            const data = await new Promise((resolve, reject) => {
                actorsApi.getActorById(parseInt(actorId), (error, data) => {
                    if (error) reject(error);
                    else resolve(data);
                });
            });
            setName(data.name);
            setBiography(data.biography);
            setErrorMessage('');
            setSuccessMessage('');
        } catch (error) {
            setErrorMessage('Error fetching actor. Please check the ID and try again.');
            console.error('Error fetching actor:', error);
        }
    };

    const handleModifyActor = async () => {
        try {
            await new Promise((resolve, reject) => {
                actorsApi.updateActor(
                    { name, biography },
                    parseInt(actorId),
                    (error, data) => {
                        if (error) reject(error);
                        else resolve(data);
                    }
                );
            });
            setSuccessMessage('Actor updated successfully.');
            setTimeout(() => window.location.reload(), 2000); // Reload after 2 seconds
        } catch (error) {
            setErrorMessage('Error updating actor. Please try again.');
            console.error('Error updating actor:', error);
        }
    };

    useEffect(() => {
        if (actorId) {
            handleSearchActor();
        }
    }, [actorId]);

    return (
        <div>
            <NavBarAdmin />
            <div className="containerLessPadding">
                <h1>Modify Actor</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <div className="search-section">
                    <input
                        type="text"
                        placeholder="Actor ID"
                        value={actorId}
                        onChange={(e) => setActorId(e.target.value)}
                    />
                    <button onClick={handleSearchActor}>Search</button>
                </div>
                {name && (
                    <div className="modify-section">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Biography</label>
                            <textarea
                                value={biography}
                                onChange={(e) => setBiography(e.target.value)}
                            />
                        </div>
                        <button onClick={handleModifyActor}>Save Changes</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ModifyActor;
