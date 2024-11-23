import React, { useState } from 'react';
import ContentsApi from '../../api/client_content/src/api/ContentsApi';
import ApiClient from '../../api/client_content/src/ApiClient';
import NavBarAdmin from "../NavBarAdmin";
import "../../styles/deleteStyles.css";
import ApiClientAddInfo from '../../api/client_addInfo/src/ApiClient';
import ViewsApi from '../../api/client_addInfo/src/api/ViewsApi';

function DeleteContent() {
    const [contentId, setContentId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const apiClient = new ApiClient();
    const contentsApi = new ContentsApi(apiClient);
    const apiClientAddInfo = new ApiClientAddInfo();
    const viewsApi = new ViewsApi(apiClientAddInfo);

    const handleDeleteContent = async () => {
        try {
            await new Promise((resolve, reject) => {
                contentsApi.deleteContent(parseInt(contentId), (error, data, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            await new Promise((resolve, reject) => {
                viewsApi.deleteContentView(parseInt(contentId), (error, data, response) => {
                    if (error) {
                        console.error('Error deleting content views:', error);
                        resolve();
                    } else {
                        resolve(data);
                    }
                });
            });

            alert('Content and views deleted successfully');
            setContentId('');
        } catch (error) {
            setErrorMessage('Error deleting content. Please try again.');
            console.error('Delete content error:', error);
        }
    };

    return (
        <div>
            <NavBarAdmin />
            <div className="containerLessPadding">
                <h1>Delete Content</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="input-section">
                    <label>Content ID</label>
                    <input
                        type="text"
                        value={contentId}
                        onChange={(e) => setContentId(e.target.value)}
                    />
                </div>
                <button onClick={handleDeleteContent}>Delete Content</button>
            </div>
        </div>
    );
}

export default DeleteContent;
