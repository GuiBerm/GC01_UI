

import React, { useState } from 'react';
import ContentsApi from '../../api/client_content/src/api/ContentsApi'; // Adjust path as needed
import ApiClient from '../../api/client_content/src/ApiClient';
import { Content } from "../../api/client_content/src";
import NavBarAdmin from "../NavBarAdmin"; // Adjust path as needed
import "../../styles/addStyles.css";

function AddContent() {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [duration, setDuration] = useState('');
    const [genre, setGenre] = useState('');
    const [actorIds, setActorIds] = useState(''); // Comma-separated string
    const [directorIds, setDirectorIds] = useState(''); // Comma-separated string
    const [language, setLanguage] = useState('');
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const apiClient = new ApiClient();
    const contentsApi = new ContentsApi(apiClient);

    const handleAddContent = async () => {
        const newContent = new Content(type, title, parseInt(releaseYear) || undefined, parseInt(duration) || undefined, genre);
        newContent.synopsis = synopsis;
        newContent.actorIds = actorIds.split(',').map(id => parseInt(id.trim())) || [];
        newContent.directorIds = directorIds.split(',').map(id => parseInt(id.trim())) || [];
        newContent.language = language;
        newContent.status = status;

        try {
            await new Promise((resolve, reject) => {
                contentsApi.addContent(newContent, (error, data, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            alert('Content added successfully');
        } catch (error) {
            setErrorMessage('Error adding content. Please try again.');
            console.error('Add content error:', error);
        }
    };

    return (
        <div>
            <NavBarAdmin />
            <div className="containerLessPadding">
                <h1>Add Content</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="input-section">
                    <label>Type (movie, documentary, series)</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                </div>
                <div className="input-section">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input-section">
                    <label>Synopsis</label>
                    <textarea value={synopsis} onChange={(e) => setSynopsis(e.target.value)} />
                </div>
                <div className="input-section">
                    <label>Release Year</label>
                    <input type="text" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
                </div>
                <div className="input-section">
                    <label>Duration (minutes)</label>
                    <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
                </div>
                <div className="input-section">
                    <label>Genre</label>
                    <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
                </div>
                <div className="input-section">
                    <label>Actor IDs (comma-separated)</label>
                    <input type="text" value={actorIds} onChange={(e) => setActorIds(e.target.value)} />
                </div>
                <div className="input-section">
                    <label>Director IDs (comma-separated)</label>
                    <input type="text" value={directorIds} onChange={(e) => setDirectorIds(e.target.value)} />
                </div>
                <div className="input-section">
                    <label>Language</label>
                    <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
                </div>
                <div className="input-section">
                    <label>Status (public, private or unlisted)</label>
                    <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
                </div>
                <button onClick={handleAddContent}>Add Content</button>
            </div>
        </div>
    );
}

export default AddContent;
