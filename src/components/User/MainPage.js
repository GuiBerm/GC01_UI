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



    return (
        <div className="main-page">
            <NavBar />

        </div>
    );
}

export default MainPage;

