import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ActorsApi from '../../api/client_content/src/api/ActorsApi';
import ApiClient from '../../api/client_content/src/ApiClient';
import NavBarAdmin from '../NavBarAdmin';
import "../../styles/showStyles.css";

function ShowActor() {
    const [actors, setActors] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const apiClient = new ApiClient();
    const actorsApi = new ActorsApi(apiClient);

    const fetchActors = async () => {
        try {
            const data = await new Promise((resolve, reject) => {
                actorsApi.getActors((error, data) => {
                    if (error) reject(error);
                    else resolve(data);
                });
            });
            setActors(data);
        } catch (error) {
            setErrorMessage('Error fetching actors. Please try again.');
            console.error('Error fetching actors:', error);
        }
    };

    useEffect(() => {
        fetchActors();
    }, []);

    return (
        <div>
            <NavBarAdmin />
            <div className="containerLessPadding">
                <h1>List of Actors</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <table className="actors-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {actors.map(actor => (
                        <tr key={actor.id} className="actor-row">
                            <td>{actor.id}</td>
                            <td>{actor.name}</td>
                            <td>
                                <div className="action-buttons">
                                    <button
                                        onClick={() =>
                                            navigate('/admin/modify-actor', {
                                                state: { actorId: actor.id }
                                            })
                                        }
                                        className="edit-button"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            navigate('/admin/delete-actor', {
                                                state: { actorId: actor.id }
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

export default ShowActor;
