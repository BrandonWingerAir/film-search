import { useEffect } from "react";

import MediaCard from './MediaCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=API_KEY';

const mediaData = {
    "Title": "Spiderman",
    "Year": "2010",
    "imdbID": "tt1785572",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {
    const searchMedia = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMedia('Spiderman');
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

            <div className="container">
                <MediaCard mediaData={mediaData} />
            </div>
        </div>
    );
}

export default App;