import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ContentCard from './ContentCard';
import NavBar from "../NavBar";
import ApiClient from '../../api/client_content/src/ApiClient';
import ContentsApi from '../../api/client_content/src/api/ContentsApi';
import '../../styles/mainPageStyles.css';

function SearchPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const initialResults = location.state?.results || [];
    const initialGenres = location.state?.genres || [];
    const initialTitleFilter = location.state?.titleFilter || '';
    const initialSelectedGenres = location.state?.selectedGenres || [];

    const [allContents, setAllContents] = useState(initialResults);
    const [searchResults, setSearchResults] = useState([]);
    const [titleFilter, setTitleFilter] = useState(initialTitleFilter);
    const [selectedGenres, setSelectedGenres] = useState(initialSelectedGenres);
    const [genres, setGenres] = useState(initialGenres);
    const [errorMessage, setErrorMessage] = useState('');

    const apiClient = React.useMemo(() => new ApiClient(), []);
    const contentsApi = React.useMemo(() => new ContentsApi(apiClient), [apiClient]);


    // Trigger handleSearch on page load
    useEffect(() => {
        handleSearch();
    }, []);

    // Clear filters
    const clearFilters = () => {
        setTitleFilter('');
        setSelectedGenres([]);
        setSearchResults(allContents);
        setErrorMessage('');
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
                <h1>Search Results</h1>
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
                        <button onClick={handleSearch}>Search</button>
                        <button onClick={clearFilters}>Clear</button>
                        <button onClick={() => navigate('/user/main')}>Back to Main</button>
                    </div>
                </div>
                <div className="content-grid">
                    {searchResults.map((content) => (
                        <ContentCard
                            key={content.id}
                            id={content.id}
                            title={content.title}
                            synopsis={content.synopsis || 'No description available'}
                        />
                    ))}
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    );
}

export default SearchPage;
