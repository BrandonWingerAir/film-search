import { useState, useEffect } from "react";

import MediaCard from './MediaCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=API_KEY';

const App = () => {
    const [mediaData, setMediaData] = useState([]);

    const searchMedia = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMediaData(data.Search);
    }

    useEffect(() => {
        searchMedia('Batman');
    }, []);

    return (
        <div className="app">
            <h1>Motion Pictures</h1>

            <div className="search">
                <input
                    placeholder="Search..."
                    value=""
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            {
                mediaData?.length > 0
                    ? (
                        <div className="container">
                            <MediaCard mediaData={mediaData[0]} />
                        </div>
                    ) :
                        <div className="noResults">
                            <h2>No results found.</h2>
                        </div>
            }
        </div>
    );
}

export default App;