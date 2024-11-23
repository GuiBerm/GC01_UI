import React, { useState } from 'react';
import ActorsApi from '../../api/client_content/src/api/ActorsApi'; // Adjust path as needed
import ApiClient from '../../api/client_content/src/ApiClient';
import {Actor} from "../../api/client_content/src";
import NavBar from "../NavBar";
import NavBarAdmin from "../NavBarAdmin"; // Adjust path as needed

function AddActor() {
    const [name, setName] = useState('');
    const [biography, setBiography] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const apiClient = new ApiClient();
    const actorsApi = new ActorsApi(apiClient);

    const handleAddActor = async () => {
        const newActor = new Actor();
        newActor.name = name;
        newActor.biography = biography;

        try {
            await new Promise((resolve, reject) => {
                actorsApi.addActor(newActor, (error, data, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            alert('Actor added successfully');
            setName('');
            setBiography('');
        } catch (error) {
            setErrorMessage('Error adding actor. Please try again.');
            console.error('Add actor error:', error);
        }
    };

    return (
        <div>
            <NavBarAdmin/>
            <div className="containerLessPadding">

                <h1>Add Actor</h1>
                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                <input
                    type="text"
                    placeholder="Actor Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Biography"
                    value={biography}
                    onChange={(e) => setBiography(e.target.value)}
                />
                <button onClick={handleAddActor}>Add Actor</button>
            </div>
            </div>
            );
            }

            export default AddActor;
