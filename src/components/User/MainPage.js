import React, { useEffect, useState } from 'react';
import ContentCard from './ContentCard';
import NavBar from "../NavBar";
import { useAuth } from '../../context/AuthContext';
import ApiClient from '../../api/client_content/src/ApiClient';
import ContentsApi from "../../api/client_content/src/api/ContentsApi";
import ApiClientAddInfo from "../../api/client_addInfo/src/ApiClient";
import ApiClientUSER from "../../api/client_user/src/ApiClient";
import ListsApi from "../../api/client_user/src/api/ListsApi";
import MiscApi from "../../api/client_addInfo/src/api/MiscApi";
import '../../styles/mainPageStyles.css';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const { auth } = useAuth();
    const [allContents, setAllContents] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [watchLater, setWatchLater] = useState([]);
    const [recentlyWatched, setRecentlyWatched] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [titleFilter, setTitleFilter] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();


    const userId = auth?.userId;
    const profileId = auth?.profileId;

    const apiClientAddinfo = React.useMemo(() => new ApiClientAddInfo(), []);
    const apiClient = React.useMemo(() => new ApiClient(), []);
    const apiClientUser = React.useMemo(() => new ApiClientUSER(), []);
    const contentsApi = React.useMemo(() => new ContentsApi(apiClient), [apiClient]);
    const listsApi = React.useMemo(() => new ListsApi(apiClientUser), [apiClientUser]);
    const miscApi = React.useMemo(() => new MiscApi(apiClientAddinfo), [apiClientAddinfo]);

    // Fetch all contents
    useEffect(() => {
        contentsApi.getContents((error, data) => {
            if (error) {
                setErrorMessage('Error fetching contents');
                console.error(error);
            } else {
                setAllContents(data || []);
            }
        });
    }, [contentsApi]);

    // Fetch all genres
    useEffect(() => {
        contentsApi.getAllGenres((error, data) => {
            if (!error) {
                setGenres(data || []);
            }
        });
    }, [contentsApi]);

    useEffect(() => {
        if (!userId || !profileId) return;

        const fetchLists = async () => {
            try {
                const fetchList = async (apiCall, deleteApiCall, setState) => {
                    const data = await new Promise((resolve, reject) =>
                        apiCall(userId, profileId, (error, result) => {
                            if (error) reject(error);
                            else resolve(result || []);
                        })
                    );

                    const validContents = await Promise.all(
                        data.map(async (contentId) => {
                            try {
                                const content = await new Promise((resolve, reject) =>
                                    contentsApi.getContentById(contentId, (err, result) => {
                                        if (err) reject(err);
                                        else resolve(result);
                                    })
                                );
                                return content;
                            } catch (err) {
                                console.error(`Error fetching content ID ${contentId}:`, err);
                                deleteApiCall(userId, profileId, contentId, () => null);
                                return null;
                            }
                        })
                    );

                    setState(validContents.filter(Boolean));
                };

                await Promise.all([
                    fetchList(
                        listsApi.usersUserIdProfilesProfileIdListsFavoritesGet.bind(listsApi),
                        listsApi.usersUserIdProfilesProfileIdListsFavoritesContentIdDelete.bind(listsApi),
                        setFavorites
                    ),
                    fetchList(
                        listsApi.usersUserIdProfilesProfileIdListsWatchLaterGet.bind(listsApi),
                        listsApi.usersUserIdProfilesProfileIdListsWatchLaterContentIdDelete.bind(listsApi),
                        setWatchLater
                    ),
                    fetchList(
                        listsApi.usersUserIdProfilesProfileIdListsRecentlyWatchedGet.bind(listsApi),
                        listsApi.usersUserIdProfilesProfileIdListsRecentlyWatchedContentIdDelete.bind(listsApi),
                        setRecentlyWatched
                    )
                ]);
            } catch (err) {
                console.error('Error fetching user lists:', err);
                setErrorMessage('Error fetching user lists.');
            }
        };

        fetchLists();
    }, [userId, profileId, listsApi, contentsApi]);




    const handleSearch = () => {
        navigate('/user/search', {
            state: {
                titleFilter,
                selectedGenres,
            },
        });
    };

    // Handle genre selection
    const handleGenreChange = (genre) => {
        setSelectedGenres((prevGenres) =>
            prevGenres.includes(genre)
                ? prevGenres.filter((g) => g !== genre) // Remove genre if already selected
                : [...prevGenres, genre] // Add genre if not selected
        );
    };

    return (
        <div className="main-page">
            <NavBar />
            <div className="main-container">
                <h1>Welcome to ToniFlix</h1>
                <h2>Explore Content</h2>

                {/* Search Section */}
                <section className="search-section">
                    <div className="search-controls">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={titleFilter}
                            onChange={(e) => setTitleFilter(e.target.value)}
                        />
                        <div className="genre-checkbox-container">
                            {genres.map((genre, index) => (
                                <div key={index} className="genre-checkbox-item">
                                    <input
                                        type="checkbox"
                                        id={`genre-${index}`}
                                        value={genre}
                                        checked={selectedGenres.includes(genre)}
                                        onChange={() => handleGenreChange(genre)}
                                    />
                                    <label htmlFor={`genre-${index}`}>{genre}</label>
                                </div>
                            ))}
                        </div>
                        <div className="button-group">
                            <button
                                style={{
                                    display: "block", // Ensure the button takes necessary width
                                    margin: "0 auto", // Center horizontally within the container
                                    padding: "10px 20px", // Internal spacing
                                    backgroundColor: "#e50914", // Red background
                                    color: "white", // White text
                                    border: "none", // No borders
                                    borderRadius: "5px", // Rounded borders
                                    cursor: "pointer", // Change cursor on hover
                                    fontSize: "13px", // Font size
                                    textAlign: "center", // Center text
                                }}
                                onClick={handleSearch}
                            >
                                Go Search!
                            </button>
                        </div>
                    </div>
                </section>

                {/* All Content Section */}
                <section className="allcontent-section">
                    <h2>All the Content</h2>
                    <div className="content-grid">
                        {allContents.map(content => (
                            <ContentCard
                                key={content.id}
                                id={content.id}
                                title={content.title}
                                synopsis={content.synopsis || 'No description available'}
                            />
                        ))}
                    </div>
                </section>



                {/* User Lists */}
                <section className="content-section">
                    <h2>Favorites</h2>
                    <div className="content-grid">
                        {favorites.map(content => (
                            <ContentCard
                                key={content.id}
                                id={content.id}
                                title={content.title}
                                synopsis={content.synopsis || 'No description available'}
                            />
                        ))}
                    </div>
                </section>
                <section className="content-section">
                    <h2>Watch Later</h2>
                    <div className="content-grid">
                        {watchLater.map(content => (
                            <ContentCard
                                key={content.id}
                                id={content.id}
                                title={content.title}
                                synopsis={content.synopsis || 'No description available'}
                            />
                        ))}
                    </div>
                </section>


                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    );
}

export default MainPage;

