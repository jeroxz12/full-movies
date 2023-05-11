import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css';


const MovieList = () => {

  const  results  = useSelector((store) => store.movies.data);

  let [filter, setFilter] = useState('');

  let [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    setFilteredData(results)
  
  },[])

  useEffect(() => {

    if( filter.length > 0 ){
      setFilteredData(results.filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase())));
    } else {
      setFilteredData(results)
    }
  },[filter])

  return (
    <div className="mt-4">
      <form className="d-flex form-filter" role="search" >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setFilter(e.target.value)}
        />
       
      </form>
      
    <div className="row">
        {filteredData.length > 0  ? filteredData.map((movie, id) => {
          return <MovieCard key={id} movie={movie} />;
        }) : filter.length === 0 ? results.map((movie, id) => {
          return <MovieCard key={id} movie={movie} />;
        }) : <h1>No se encontraron resultados que coincidan con tu busqueda.</h1>}
        
    </div>
    </div>
  );
};

export default MovieList;
