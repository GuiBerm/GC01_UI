import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DirectorsApi from '../../api/client_content/src/api/DirectorsApi';
import ApiClient from '../../api/client_content/src/ApiClient';
import NavBarAdmin from '../NavBarAdmin';
import "../../styles/showStyles.css";

function ShowDirector() {
    const [directors, setDirectors] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const apiClient = new ApiClient();
    const directorsApi = new DirectorsApi(apiClient);

    const fetchDirectors = async () => {
        try {
            const data = await new Promise((resolve, reject) => {
                directorsApi.getDirectors((error, data) => {
                    if (error) reject(error);
                    else resolve(data);
                });
            });
            setDirectors(data);
        } catch (error) {
            setErrorMessage('Error fetching directors. Please try again.');
            console.error('Error fetching directors:', error);
        }
    };

    useEffect(() => {
        fetchDirectors();
    }, []);

    return (
        <div>
            <NavBarAdmin />
            <div className="containerLessPadding">
                <h1>List of Directors</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <table className="directors-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {directors.map(director => (
                        <tr key={director.id} className="director-row">
                            <td>{director.id}</td>
                            <td>{director.name}</td>
                            <td>
                                <div className="action-buttons">
                                    <button
                                        onClick={() =>
                                            navigate('/admin/modify-director', {
                                                state: { directorId: director.id }
                                            })
                                        }
                                        className="edit-button"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            navigate('/admin/delete-director', {
                                                state: { directorId: director.id }
                                            })
                                        }
                                        className="delete-button"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowDirector;
