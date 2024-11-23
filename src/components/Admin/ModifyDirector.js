import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DirectorsApi from '../../api/client_content/src/api/DirectorsApi';
import ApiClient from '../../api/client_content/src/ApiClient';
import NavBarAdmin from "../NavBarAdmin";
import "../../styles/modifyStyles.css";

function ModifyDirector() {
    const [directorId, setDirectorId] = useState('');
    const [name, setName] = useState('');
    const [biography, setBiography] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const location = useLocation(); // Hook to access the passed state

    const apiClient = new ApiClient();
    const directorsApi = new DirectorsApi(apiClient);

    const handleSearchDirector = async (id) => {
        try {
            const data = await new Promise((resolve, reject) => {
                directorsApi.getDirectorById(parseInt(id || directorId), (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            setName(data.name);
            setBiography(data.biography);
            setErrorMessage('');
            setSuccessMessage('');
        } catch (error) {
            setErrorMessage('Error fetching director. Please check the ID and try again.');
            console.error('Error fetching director:', error);
        }
    };

    const handleModifyDirector = async () => {
        try {
            await new Promise((resolve, reject) => {
                directorsApi.updateDirector(
                    { name, biography },
                    parseInt(directorId),
                    (error, data) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    }
                );
            });
            setSuccessMessage('Director updated successfully.');
            setTimeout(() => window.location.reload(), 2000); // Reload after 2 seconds
        } catch (error) {
            setErrorMessage('Error updating director. Please try again.');
            console.error('Error updating director:', error);
        }
    };

    // Fetch director ID from location state and perform search automatically
    useEffect(() => {
        const idFromState = location.state?.directorId;
        if (idFromState) {
            setDirectorId(idFromState);
            handleSearchDirector(idFromState);
        }
    }, [location.state]);

    return (
        <div>
            <NavBarAdmin />
            <div className="containerLessPadding">
                <h1>Modify Director</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <div className="search-section">
                    <input
                        type="text"
                        placeholder="Director ID"
                        value={directorId}
                        onChange={(e) => {
                            setDirectorId(e.target.value);
                            setName('');
                            setBiography('');
                        }}
                    />
                    <button onClick={() => handleSearchDirector()}>Search</button>
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
                        <button onClick={handleModifyDirector}>Save Changes</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ModifyDirector;
