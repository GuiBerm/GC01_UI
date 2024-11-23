import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ContinueWatchingApi from '../../api/client_addInfo/src/api/ContinueWatchingApi';
import ApiClientAddInfo from '../../api/client_addInfo/src/ApiClient';
import ApiClientUSER from '../../api/client_user/src/ApiClient';
import ListsApi from '../../api/client_user/src/api/ListsApi';
import '../../styles/playPageStyles.css';

function PlayPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { auth } = useAuth();
    const [counter, setCounter] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isNewEntry, setIsNewEntry] = useState(true);
    const [hasFetchedContinueWatching, setHasFetchedContinueWatching] = useState(false);

    const contentDuration = location.state?.duration || 0;

    const apiClientUser = new ApiClientUSER();
    const listsApi = new ListsApi(apiClientUser);
    const apiClient = new ApiClientAddInfo();
    const continueWatchingApi = new ContinueWatchingApi(apiClient);



    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleClear = () => {
        setCounter(0);
    };



    const minutes = Math.floor(counter / 60);
    const seconds = counter % 60;

    return (
        <div className="play-page-container">
            <div className="play-header">
                <Link to="#" onClick={handleBack} className="back-link">← Back</Link>
                <h2 className="content-title">{location.state?.title || 'Unknown Title'}</h2>
            </div>
            <div className="play-content">
                <h1 className="timer-display">
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds} / {contentDuration} minutes
                </h1>
                <div className="control-buttons">
                    <button className="play-button" onClick={handlePauseResume}>
                        {isPaused ? 'Resume' : 'Pause'}
                    </button>
                    <button className="play-button" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlayPage;
