import React from "react";
 const API_IMAGE_URL = 'https://image.tmdb.org/t/p/original'
const MovieCard = ({ movie }) => {
  return (
    <div className="card  m-1" style={{width: "18rem"}}>
      <img src={API_IMAGE_URL+'/'+movie.backdrop_path} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <a href={`/movies/${movie.id}`} className="btn btn-primary">
          View More
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
