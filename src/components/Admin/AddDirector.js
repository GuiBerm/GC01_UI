import React, { useState } from 'react';
import DirectorsApi from '../../api/client_content/src/api/DirectorsApi'; // Adjust path as needed
import ApiClient from '../../api/client_content/src/ApiClient'; // Adjust path as needed
import Director from "../../api/client_content/src/model/Director";
import NavBarAdmin from "../NavBarAdmin"; // Adjust path if necessary

import "../../styles/addStyles.css";

function AddDirector() {
    const [name, setName] = useState('');
    const [biography, setBiography] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const apiClient = new ApiClient();
    const directorsApi = new DirectorsApi(apiClient);

    const handleAddDirector = async () => {
        const newDirector = new Director();
        newDirector.name = name;
        newDirector.biography = biography;

        try {
            await new Promise((resolve, reject) => {
                directorsApi.addDirector(newDirector, (error, data) => {
                    if (error) reject(error);
                    else resolve(data);
                });
            });
            alert('Director added successfully');
            setName('');
            setBiography('');
        } catch {
            setErrorMessage('Error adding director. Please try again.');
        }
    };

    return (
        <div>
            <NavBarAdmin />
            <div className="containerLessPadding">
                <h1>Add Director</h1>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <div className="input-section">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-section">
                    <label>Biography</label>
                    <textarea
                        placeholder="Biography"
                        value={biography}
                        onChange={(e) => setBiography(e.target.value)}
                    />
                </div>
                <button onClick={handleAddDirector}>Add Director</button>
            </div>
        </div>
    );
}

export default AddDirector;
