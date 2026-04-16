import { useState } from "react";
import MovieCard from "../components/movieCard";
import "../css/Home.css";

function Home(){
    const [searchQuery,setSearchQuery] = useState("")

    const movie =[
        {id:1, title: "John Wick 4",release_date:"2024"},
        {id:2, title: "Avengers: EndGame",release_date:"2020"},
        {id:3, title: "Hulk",release_date:"2024"},
        {id:4, title: "Captain America",release_date:"2004"},
        {id:5, title: "Thor",release_date:"2014"},
    ]
    const handleSearch =(e) => {
        alert(searchQuery)
    }
    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies...."
             className="search-input"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             />
            <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="movies-grid">
            {movie.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
    );
}
export default Home