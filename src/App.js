import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=API_KEY';

const App = () => {
    const searchFilms = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchFilms('Test');
    }, []);

    return (
        <div className="app">
            <h1>Find A Film</h1>

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
        </div>
    );
}

export default App;