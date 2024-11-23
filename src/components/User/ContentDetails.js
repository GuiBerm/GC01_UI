import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from "../NavBar";
import ContentsApi from '../../api/client_content/src/api/ContentsApi';
import ApiClient from '../../api/client_content/src/ApiClient';
import ApiClientUSER from '../../api/client_user/src/ApiClient';
import ApiClientAddInfo from '../../api/client_addInfo/src/ApiClient';
import MiscApi from "../../api/client_addInfo/src/api/MiscApi";
import ViewsApi from '../../api/client_addInfo/src/api/ViewsApi';
import ListsApi from '../../api/client_user/src/api/ListsApi';
import ReviewsApi from '../../api/client_addInfo/src/api/ReviewsApi';
import UsersApi from '../../api/client_user/src/api/UsersApi';
import ProfilesApi from '../../api/client_user/src/api/ProfilesApi'; // Asegúrate de que esta ruta es correcta
import { useAuth } from '../../context/AuthContext';
import "../../styles/contentDetailsStyles.css"

function ContentDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [language, setLanguage] = useState(null);
    const [viewCount, setViewCount] = useState(0);
    const [isInFavorites, setIsInFavorites] = useState(false);
    const [isInWatchLater, setIsInWatchLater] = useState(false);
    const [averageRating, setAverageRating] = useState(null);
    const [userRating, setUserRating] = useState(null); // Reseña actual del usuario obtenida del servidor
    const [inputRating, setInputRating] = useState(''); // Valor que el usuario ingresa en el campo de entrada
    const [errorMessage, setErrorMessage] = useState('');
    const { auth } = useAuth(); // Obtener userId y profileId del contexto de autenticación
    const [notification, setNotification] = useState(''); // Estado para manejar notificaciones
    const [allReviews, setAllReviews] = useState([]); // Nuevo estado para todas las reseñas

    // Instanciar clientes API correctamente
    const apiClientAddinfo = React.useMemo(() => new ApiClientAddInfo(), []);
    const apiClient = React.useMemo(() => new ApiClient(), []);
    const apiClientUser = React.useMemo(() => new ApiClientUSER(), []);
    const contentsApi = React.useMemo(() => new ContentsApi(apiClient), [apiClient]);
    const listsApi = React.useMemo(() => new ListsApi(apiClientUser), [apiClientUser]);
    const miscApi = React.useMemo(() => new MiscApi(apiClientAddinfo), [apiClientAddinfo]);
    const viewsApi = React.useMemo(() => new ViewsApi(apiClientAddinfo), [apiClientAddinfo]);
    const reviewsApi = React.useMemo(() => new ReviewsApi(apiClientAddinfo), [apiClientAddinfo]);
    const usersApi = React.useMemo(() => new UsersApi(apiClientUser), [apiClientUser]);
    const profilesApi = React.useMemo(() => new ProfilesApi(apiClientUser), [apiClientUser]); // Instanciar ProfilesApi

    const userId = auth?.userId;
    const profileId = auth?.profileId;

    // Función para obtener todas las reseñas con nombres de usuario y perfil
    const fetchAllReviews = async () => {
        try {
            // Obtener todas las reseñas para el contenido
            const reviewsResponse = await new Promise((resolve, reject) => {
                reviewsApi.getNumericReviewsForContent(parseInt(id), (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            console.log('Reviews Response:', reviewsResponse);

            let reviews = [];
            // Verificar si la respuesta tiene una propiedad 'reviews'
            if (reviewsResponse.reviews && Array.isArray(reviewsResponse.reviews)) {
                reviews = reviewsResponse.reviews;
            } else if (Array.isArray(reviewsResponse)) {
                reviews = reviewsResponse;
            } else {
                console.warn('Formato de respuesta inesperado para las reseñas:', reviewsResponse);
            }

            console.log('Parsed Reviews:', reviews);

            // Obtener detalles de usuario y perfil para cada reseña
            const reviewsWithDetails = await Promise.all(
                reviews.map(async (review) => {
                    try {
                        // Ajustar el nombre del campo de userId y profileId según la respuesta
                        const reviewId = review.reviewId || review.review_id;
                        const contentId = review.contentId || review.content_id;
                        const userIdReview = review.userId || review.user_id;
                        const profileIdReview = review.profileId || review.profile_id;
                        const rating = review.rating;

                        if (!userIdReview || !profileIdReview) {
                            console.warn('No userId or profileId found for review:', review);
                            return {
                                ...review,
                                username: `User Unknown`,
                                profileName: `Profile Unknown`,
                            };
                        }

                        // Obtener el nombre del usuario
                        const userResponse = await new Promise((resolve, reject) => {
                            usersApi.usersUserIdGet(userIdReview, (error, data) => {
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve(data);
                                }
                            });
                        });

                        // Obtener el nombre del perfil
                        const profileResponse = await new Promise((resolve, reject) => {
                            profilesApi.usersUserIdProfilesProfileIdGet(userIdReview,profileIdReview, (error, data) => {
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve(data);
                                }
                            });
                        });

                        console.log(`User Response for userId ${userIdReview}:`, userResponse);
                        console.log(`Profile Response for profileId ${profileIdReview}:`, profileResponse);

                        return {
                            ...review,
                            reviewId,
                            contentId,
                            userId: userIdReview,
                            profileId: profileIdReview,
                            username: userResponse?.username || `User ${userIdReview}`,
                            profileName: profileResponse?.name || `Profile ${profileIdReview}`,
                            rating,
                        };
                    } catch (error) {
                        console.error(`Error fetching user or profile data for review:`, error);
                        return {
                            ...review,
                            username: `User ${review.userId || review.user_id || 'Unknown'}`,
                            profileName: `Profile ${review.profileId || review.profile_id || 'Unknown'}`,
                        };
                    }
                })
            );

            setAllReviews(reviewsWithDetails);

            // Calcular la calificación promedio
            if (reviews.length > 0) {
                const totalRating = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
                const avgRating = totalRating / reviews.length;
                setAverageRating(avgRating.toFixed(2)); // Mostrar dos decimales
            } else {
                setAverageRating('No reviews');
            }
        } catch (error) {
            if (error.status !== 404) {

                console.error('Error fetching all reviews:', error);
                setErrorMessage('Error fetching reviews. Please try again later.');
            }
        }
    };

    // Obtener todas las reseñas al montar el componente o al cambiar el id
    useEffect(() => {
        fetchAllReviews();
    }, [id, reviewsApi, usersApi, profilesApi]);

    // Fetch content details
    useEffect(() => {
        const fetchContentDetails = async () => {
            try {
                const contentResponse = await new Promise((resolve, reject) => {
                    contentsApi.getContentById(parseInt(id), (error, data) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
                });
                setContent(contentResponse);
            } catch (error) {
                setErrorMessage('Error fetching content details. Please try again.');
                console.error('Error fetching content details:', error);
            }
        };

        fetchContentDetails();
    }, [id, contentsApi]);

    // Fetch content languages
    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const contentResponse = await new Promise((resolve, reject) => {
                    miscApi.getContentLanguages(parseInt(id), (error, data) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
                });

                console.log('Content languages response:', contentResponse);
                if (contentResponse && contentResponse.languages) {
                    setLanguage(contentResponse.languages);
                } else {
                    setLanguage('Unknown');
                }
            } catch (error) {
                setErrorMessage('Error fetching content languages. Please try again.');
                console.error('Error fetching content languages:', error);
            }
        };

        fetchLanguages();
    }, [id, miscApi]);

    // Fetch content view count
    useEffect(() => {
        const fetchViewCount = async () => {
            try {
                const viewResponse = await new Promise((resolve, reject) => {
                    viewsApi.getContentViews(parseInt(id), (error, data) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
                });

                console.log('Content views response:', viewResponse);
                if (viewResponse && typeof viewResponse.views === 'number') {
                    setViewCount(viewResponse.views);
                } else {
                    setViewCount(0);
                }
            } catch (error) {
                setErrorMessage('Error fetching view count. Please try again.');
                console.error('Error fetching view count:', error);
            }
        };

        fetchViewCount();
    }, [id, viewsApi]);



    // Fetch current user's review
    useEffect(() => {
        if (!userId || !profileId) {
            return;
        }

        const fetchUserReview = async () => {
            try {
                const userReviewResponse = await new Promise((resolve, reject) => {
                    reviewsApi.getNumericReviewForContentByUserAndProfile(parseInt(id), userId, profileId, (error, data) => {
                        if (error) {
                            if (error.status === 404) {
                                // No review from user
                                setUserRating(null);
                                setInputRating('');
                                resolve();
                            } else {
                                reject(error);
                            }
                        } else {
                            resolve(data);
                        }
                    });
                });

                if (userReviewResponse && userReviewResponse.rating) {
                    setUserRating(userReviewResponse.rating);
                    setInputRating(userReviewResponse.rating);
                } else {
                    setUserRating(null);
                    setInputRating('');
                }
            } catch (error) {
                console.error('Error fetching user review:', error);
            }
        };

        fetchUserReview();
    }, [id, userId, profileId, reviewsApi]);

    // Handlers para Play, Favoritos, Watch Later, y Reseñas
    const handlePlay = async () => {
        // Try to update view count with PUT, if it fails, try POST
        try {
            await new Promise((resolve, reject) => {
                const updateViewRequest = {
                    new_view_count: viewCount + 1,
                };
                viewsApi.updateContentView(updateViewRequest, parseInt(id), (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });

            // Update view count in state
            setViewCount(prevCount => prevCount + 1);
        } catch (error) {
            console.error('Error updating view count:', error);
            // If it fails, try adding a new view with POST
            try {
                await new Promise((resolve, reject) => {
                    const viewRequest = {
                        view_count: 1,
                    };
                    viewsApi.addContentView(viewRequest, parseInt(id), (error, data) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    });
                });

                // Update view count in state
                setViewCount(prevCount => prevCount + 1);
            } catch (error) {
                console.error('Error adding view count:', error);
                showNotification('Could not increment view count. Please try again.');
            }
        }

        // Navigate to play page
        navigate(`/play/${content.id}`, { state: { duration: content.duration, title: content.title } });
    };

    // Function to show a notification
    const showNotification = (message, duration = 3000) => {
        setNotification(message);
        setTimeout(() => setNotification(''), duration); // Remove message after a while
    };

    const handleAddToFavorites = async () => {
        if (!userId || !profileId) {
            showNotification('Missing user or profile information.');
            return;
        }
        try {
            await new Promise((resolve, reject) => {
                listsApi.usersUserIdProfilesProfileIdListsFavoritesPost(
                    parseInt(id),
                    userId,
                    profileId,
                    (error) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve();
                        }
                    }
                );
            });
            showNotification('Added to Favorites');
            setIsInFavorites(true);
        } catch (error) {
            console.error('Error adding to Favorites:', error);
            showNotification('Could not add to Favorites. Please try again.');
        }
    };

    const handleRemoveFromFavorites = async () => {
        if (!userId || !profileId) {
            showNotification('Missing user or profile information.');
            return;
        }
        try {
            await new Promise((resolve, reject) => {
                listsApi.usersUserIdProfilesProfileIdListsFavoritesContentIdDelete(
                    userId,
                    profileId,
                    parseInt(id),
                    (error) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve();
                        }
                    }
                );
            });
            showNotification('Removed from Favorites');
            setIsInFavorites(false);
        } catch (error) {
            console.error('Error removing from Favorites:', error);
            showNotification('Could not remove from Favorites. Please try again.');
        }
    };

    const handleAddToSeeLater = async () => {
        if (!userId || !profileId) {
            showNotification('Missing user or profile information.');
            return;
        }
        try {
            await new Promise((resolve, reject) => {
                listsApi.usersUserIdProfilesProfileIdListsWatchLaterPost(
                    parseInt(id),
                    userId,
                    profileId,
                    (error) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve();
                        }
                    }
                );
            });
            showNotification('Added to Watch Later');
            setIsInWatchLater(true);
        } catch (error) {
            console.error('Error adding to Watch Later:', error);
            showNotification('Could not add to Watch Later. Please try again.');
        }
    };



    // Handlers para reviews
    const handleAddOrUpdateReview = async () => {
        if (!userId || !profileId) {
            showNotification('Missing user or profile information.');
            return;
        }

        const ratingValue = parseInt(inputRating);
        if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
            showNotification('Please enter a valid rating between 1 and 5.');
            return;
        }

        try {
            if (userRating !== null) {
                // Update existing review
                const updateReviewRequest = {
                    rating: ratingValue,
                };
                await new Promise((resolve, reject) => {
                    reviewsApi.updateNumericReviewForContentByUserAndProfile(
                        updateReviewRequest,
                        parseInt(id),
                        userId,
                        profileId,
                        (error, data) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(data);
                            }
                        }
                    );
                });
                showNotification('Review updated');
            } else {
                // Add new review
                const reviewRequest = {
                    rating: ratingValue,
                };
                await new Promise((resolve, reject) => {
                    reviewsApi.addNumericReviewForContent(
                        reviewRequest,
                        parseInt(id),
                        userId,
                        profileId,
                        (error, data) => {
                            if (error) {
                                reject(error);
                            } else {
                                resolve(data);
                            }
                        }
                    );
                });
                showNotification('Review added');
            }
            setUserRating(ratingValue);
            // Actualizar la lista de reseñas
            await fetchAllReviews();
        } catch (error) {
            console.error('Error adding/updating review:', error);
            showNotification('Could not add/update review. Please try again.');
        }
    };

    const handleDeleteReview = async () => {
        if (!userId || !profileId) {
            showNotification('Missing user or profile information.');
            return;
        }
        try {
            await new Promise((resolve, reject) => {
                reviewsApi.deleteNumericReviewForContent(
                    parseInt(id),
                    userId,
                    profileId,
                    (error, data) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(data);
                        }
                    }
                );
            });
            showNotification('Review deleted');
            setUserRating(null);
            setInputRating('');
            // Actualizar la lista de reseñas
            await fetchAllReviews();
        } catch (error) {
            console.error('Error deleting review:', error);
            showNotification('Could not delete review. Please try again.');
        }
    };

    // Renderizado condicional basado en el estado de errores y carga
    if (errorMessage) {
        return <p style={{ color: 'red' }}>{errorMessage}</p>;
    }

    if (!content) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <NavBar />
            <div className="containerLessPadding">
                {notification && <div className="notification">{notification}</div>}
                <h1>{content?.title || 'Loading...'}</h1>
                <div className="details-container">
                    <div className="details-left">
                        <p><strong>Genre:</strong> {content.genre}</p>
                        <p><strong>Duration:</strong> {content.duration}</p>
                        <p><strong>Language:</strong> {language}</p>
                    </div>
                    <div className="details-right">
                        <p><strong>Views:</strong> {viewCount}</p>
                        <p><strong>Average Rating:</strong> {averageRating ? `${averageRating}/5` : 'No reviews'}</p>
                        <p><strong>Your Rating:</strong> {userRating !== null ? `${userRating}/5` : '-/5'}</p>
                    </div>
                </div>
                <p className="content-description"><strong>Description:</strong> {content.synopsis}</p>

                <div className="button-group">
                    <button onClick={handlePlay}>Play</button>
                    <button onClick={isInFavorites ? handleRemoveFromFavorites : handleAddToFavorites}>
                        {isInFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                    <button onClick={isInWatchLater ? handleRemoveFromSeeLater : handleAddToSeeLater}>
                        {isInWatchLater ? 'Remove from Watch Later' : 'Add to Watch Later'}
                    </button>
                </div>

                <div className="review-section">
                    <h3>Your Review</h3>
                    <div className="review-input">
                        <input
                            type="number"
                            min="1"
                            max="5"
                            placeholder="Rating (1-5)"
                            value={inputRating}
                            onChange={(e) => setInputRating(e.target.value)}
                        />
                        <div className="review-buttons">
                            <button onClick={handleAddOrUpdateReview}>Save Review</button>
                            {userRating !== null && (
                                <button onClick={handleDeleteReview}>Delete Review</button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Nueva sección de reseñas */}
                <div className="all-reviews">
                    <h3>All Reviews</h3>
                    {allReviews.length > 0 ? (
                        <ul>
                            {allReviews.map((review, index) => (
                                <li key={`${review.reviewId || review.review_id}-${index}`}>
                                    <strong>{review.username}</strong> ({review.profileName}): {review.rating}/5
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            </div>
        </div>
    );

}

export default ContentDetails;
