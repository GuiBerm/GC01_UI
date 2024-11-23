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


            </div>
        </div>
    );

}

export default ContentDetails;
