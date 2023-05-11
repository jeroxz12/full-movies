import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css';


const MovieList = () => {

  const  results  = useSelector((store) => store.movies.data);
  let [filter, setFilter] = useState('');
  return (
    <div className="mt-4">
      <form className="d-flex form-filter" role="search" >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit" >
          Search
        </button>
      </form>
    <div className="row">

      {results &&
        results.map((movie, id) => {
          return <MovieCard key={id} movie={movie} />;
        })}
    </div>
    </div>
  );
};

export default MovieList;
