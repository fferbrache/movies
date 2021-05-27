import React from "react";

export default function Movie({ movie }) {
  const { Poster, Title, Year } = movie;


  return (
    <div>
      <div className="card">
        <img className="movie-img" style={{ backgroundImage: `url(${Poster})` }} alt="" />
        <div className="movie-detail">
          <h4>{Title}</h4>
          <p>Year: {Year}</p>
        </div>
      </div>
    </div>
  );
}
