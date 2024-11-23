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

    useEffect(() => {
        if (auth.userId && auth.profileId && !hasFetchedContinueWatching) {
            continueWatchingApi.getContinueWatching(auth.userId, auth.profileId, parseInt(id), (error, data) => {
                if (!error && data?.lastWatchedMinute >= 0) {
                    setCounter(data.lastWatchedMinute * 60);
                    setIsNewEntry(false);
                }
                setHasFetchedContinueWatching(true);
            });
        }
    }, [auth.userId, auth.profileId, id, continueWatchingApi, hasFetchedContinueWatching]);

    useEffect(() => {
        let interval;
        if (!isPaused && counter < contentDuration * 60) {
            interval = setInterval(() => {
                setCounter((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isPaused, counter, contentDuration]);

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleClear = () => {
        setCounter(0);
    };

    const handleBack = async () => {
        const minutes = Math.floor(counter / 60);
        const requestData = { last_watched_minute: minutes };

        if (auth.userId && auth.profileId) {
            try {
                if (minutes < contentDuration) {
                    if (isNewEntry) {
                        await Promise.all([
                            new Promise((resolve, reject) => {
                                continueWatchingApi.addContinueWatching(
                                    requestData,
                                    auth.userId,
                                    auth.profileId,
                                    parseInt(id),
                                    (error) => (error ? reject(error) : resolve())
                                );
                            }),
                            new Promise((resolve, reject) => {
                                listsApi.usersUserIdProfilesProfileIdListsRecentlyWatchedPost(
                                    parseInt(id),
                                    auth.userId,
                                    auth.profileId,
                                    (error) => (error ? reject(error) : resolve())
                                );
                            }),
                        ]);
                    } else {
                        const newReqData = { new_last_watched_minute: minutes };
                        await new Promise((resolve, reject) => {
                            continueWatchingApi.updateContinueWatching(
                                newReqData,
                                auth.userId,
                                auth.profileId,
                                parseInt(id),
                                (error) => (error ? reject(error) : resolve())
                            );
                        });
                    }
                } else {
                    await Promise.all([
                        new Promise((resolve, reject) => {
                            continueWatchingApi.deleteContinueWatching(
                                auth.userId,
                                auth.profileId,
                                parseInt(id),
                                (error) => (error ? reject(error) : resolve())
                            );
                        }),
                        new Promise((resolve, reject) => {
                            listsApi.usersUserIdProfilesProfileIdListsRecentlyWatchedContentIdDelete(
                                auth.userId,
                                auth.profileId,
                                parseInt(id),
                                (error) => (error ? reject(error) : resolve())
                            );
                        }),
                    ]);
                }
            } catch (error) {
                console.error('Error updating continue watching or recently watched:', error);
            }
        }

        navigate(`/user/content/${id}`);
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
