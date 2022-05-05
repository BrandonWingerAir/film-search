import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';
import NoImage from './no-image-placeholder.jpg';

const API_URL = 'http://www.omdbapi.com?apikey=API_KEY';

const mediaTest = {
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
                <div className="media">
                    <div>
                        <p>{mediaTest.Year}</p>
                    </div>

                    <div>
                        <img src={mediaTest.Poster !== 'N/A' ? mediaTest.Poster : NoImage} alt={mediaTest.Title}/>
                    </div>

                    <div>
                        <span>{mediaTest.Type}</span>
                        <h3>{mediaTest.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;