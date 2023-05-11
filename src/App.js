import { useEffect } from 'react'

import './App.css'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setMovies } from './redux/store/slices/movieSlice'
import { Routes, Route } from 'react-router-dom'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Contact from './pages/Contact/Contact'
import ContactList from './pages/ContactList/ContactList'


export const API_KEY = '983a9764b3baa4f1eac0fd0ec8df55c0'
export const API_URL = 'https://api.themoviedb.org/3'

function App() {

const dispatch = useDispatch();

const getMovies =  () => {
  axios.get('https://api.themoviedb.org/3/discover/movie?api_key=983a9764b3baa4f1eac0fd0ec8df55c0').then((res) => {
  dispatch(setMovies(res.data.results))
})}
useEffect( () => {
  getMovies()
},[])


  return (
    <div className='App container'>
      <Navbar/>
    <Routes>
      <Route  path='/movies' element={<Home />}/>
      <Route  path='/movies/:id' element={<MovieDetail />}/>
      <Route  path='/about-us' element={<AboutUs />}/>
      <Route  path='/contact' element={<Contact />}/>
      <Route  path='/contacts' element={<ContactList />}/>
      <Route  path='*' element={<Home />}/>
    </Routes>
    </div>
  )
}
export default App