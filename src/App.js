import { useEffect } from "react";

const API_URL = 'http://www.omdbapi.com?apikey=YOUR_API_KEY';

const App = () => {
    const searchFilms = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        searchFilms('Test');
    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;