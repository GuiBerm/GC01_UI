import React, { useState } from 'react';
import ContentsApi from '../../api/client_content/src/api/ContentsApi'; // Adjust path as needed
import ApiClient from '../../api/client_content/src/ApiClient';
import NavBarAdmin from "../NavBarAdmin"; // Adjust path as needed
import "../../styles/modifyStyles.css";

function ModifyContent() {
    const [contentId, setContentId] = useState('');
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [duration, setDuration] = useState('');
    const [genre, setGenre] = useState('');
    const [actorIds, setActorIds] = useState('');
    const [directorIds, setDirectorIds] = useState('');
    const [language, setLanguage] = useState('');
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const apiClient = new ApiClient();
    const contentsApi = new ContentsApi(apiClient);

    const handleSearchContent = async () => {
        try {
            const data = await new Promise((resolve, reject) => {
                contentsApi.getContentById(parseInt(contentId), (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            setTitle(data.title || '');
            setType(data.type || '');
            setSynopsis(data.synopsis || '');
            setReleaseYear(data.releaseYear?.toString() || '');
            setDuration(data.duration?.toString() || '');
            setGenre(data.genre || '');
            setActorIds(data.actorIds?.join(', ') || '');
            setDirectorIds(data.directorIds?.join(', ') || '');
            setLanguage(data.language || '');
            setStatus(data.status || '');
            setErrorMessage('');
            setSuccessMessage('');
        } catch (error) {
            setErrorMessage('Error fetching content. Please check the ID and try again.');
            console.error('Error fetching content:', error);
        }
    };

    const handleModifyContent = async () => {
        const updatedContent = {
            title,
            type,
            synopsis,
            releaseYear: parseInt(releaseYear) || undefined,
            duration: parseInt(duration) || undefined,
            genre,
            actorIds: actorIds.split(',').map((id) => parseInt(id.trim())),
            directorIds: directorIds.split(',').map((id) => parseInt(id.trim())),
            language,
            status,
        };

        try {
            await new Promise((resolve, reject) => {
                contentsApi.updateContent(updatedContent, parseInt(contentId), (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            setSuccessMessage('Content updated successfully.');
            setTimeout(() => window.location.reload(), 2000); // Reload after 2 seconds
        } catch (error) {
            setErrorMessage('Error updating content. Please try again.');
            console.error('Error updating content:', error);
        }
    };

    return (
        <div>
            <NavBarAdmin />
            <div className="containerLessPadding">
                <h1>Modify Content</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <div className="search-section">
                    <input
                        type="text"
                        placeholder="Content ID"
                        value={contentId}
                        onChange={(e) => {
                            setContentId(e.target.value);
                            setTitle('');
                            setType('');
                            setSynopsis('');
                            setReleaseYear('');
                            setDuration('');
                            setGenre('');
                            setActorIds('');
                            setDirectorIds('');
                            setLanguage('');
                            setStatus('');
                        }}
                    />
                    <button onClick={handleSearchContent}>Search</button>
                </div>
                {title && (
                    <div className="modify-section">
                        <div className="form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Type</label>
                            <input
                                type="text"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Synopsis</label>
                            <textarea
                                value={synopsis}
                                onChange={(e) => setSynopsis(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Release Year</label>
                            <input
                                type="text"
                                value={releaseYear}
                                onChange={(e) => setReleaseYear(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Duration</label>
                            <input
                                type="text"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Genre</label>
                            <input
                                type="text"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Actor IDs (comma-separated)</label>
                            <input
                                type="text"
                                value={actorIds}
                                onChange={(e) => setActorIds(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Director IDs (comma-separated)</label>
                            <input
                                type="text"
                                value={directorIds}
                                onChange={(e) => setDirectorIds(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Language</label>
                            <input
                                type="text"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Status (public, private or unlisted</label>
                            <input
                                type="text"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                        <button onClick={handleModifyContent}>Save Changes</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ModifyContent;
