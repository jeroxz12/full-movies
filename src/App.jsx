import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import MovieList from './components/MovieList/MovieList'
import axios from 'axios'
import { setMovies } from './redux/store/slices/movieSlice'

export const API_KEY = '983a9764b3baa4f1eac0fd0ec8df55c0'
export const API_URL = 'https://api.themoviedb.org/3'



function App() {

const dispatch = useDispatch();

const getMovies =  () => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=983a9764b3baa4f1eac0fd0ec8df55c0').then((res) => {
  dispatch(setMovies(res.data))
})}
useEffect( () => {
  getMovies()
},[])


  return (
    <>
    <MovieList />
    </>
  )
}

export default App
