import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  filterMovieById,
  setMovies,
} from "../../redux/store/slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTrailer } from "../../helpers/functions";
import ReactPlayer from "react-player";
import axios from "axios";
const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.movies);
  const { movieToDetail } = useSelector((store) => store.movies);
  const [trailer, setTrailer] = useState([]);
  const fetchVideos = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=983a9764b3baa4f1eac0fd0ec8df55c0`
      )
      .then((res) => {
        const response = res.data.results;
        setTrailer(getTrailer(response));
      });
  };

  useEffect(() => {
    dispatch(filterMovieById(id));
    if (id !== undefined) {
      fetchVideos();
    }
  }, [data]);
  console.log(`https://www.youtube.com/watch?v=${trailer.key}`);
  return (
    <>
      <h1>{movieToDetail && movieToDetail.title}</h1>
      {trailer && (
        <div className="card mb-3">
          <ReactPlayer  url={`https://www.youtube.com/watch?v=${trailer.key}`}
                    width={'100%'} controls  
                  />
          <div className="card-body">
            <h5 className="card-title">Synopsis:</h5>        
               <p className="card-text">{movieToDetail && movieToDetail.overview}</p>          
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
