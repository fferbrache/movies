import React, { useState } from 'react';
import Movie from './Movie';
import { API } from './key';

export default function MovieContainer() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  
  const getMovies = async () => {
    const URL = `http://www.omdbapi.com/?apikey=${API}&s=${searchMovie}`;
    const requestBody = {
      headers: { Accept: "application/json" },
    };
    const movieData = await fetch(URL, requestBody);
    const movieDataParsed = await movieData.json();
    const response = movieDataParsed.Response;
    if (response) {
      await setMovies(movieDataParsed.Search)
    };
  };

  return (
    <>
      <div className="input-fields">
        <input
        type="text" 
        onChange={(e) => setSearchMovie(e.target.value)}
        placeholder="Search for movies"
        />
        <button onClick={getMovies}>Search</button> 
      </div>
      <div className="main">
        {movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    </>
  );
}
