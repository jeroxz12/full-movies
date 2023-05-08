import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
const MovieList = () => {
    const  {results}  = useSelector(store => store.movies.data)
    console.log(results);
  return (
    <div className='row'>
        {results && results.map((movie, id) => {
          return <MovieCard  key={id} movie={movie}/>
        })}
    </div>
  )
}

export default MovieList