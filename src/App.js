
import { BrowserRouter, Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import RootLayout from './Layouts/RootLayout';
import HomePage from './Pages/HomePage';
import Search from './Components/Search/Search';
import About from './Components/Global/About';
import Movies from './Components/Global/Movies';
import Series from './Components/Global/Series';
import Upcoming from './Components/Global/Upcoming';
import Trending from './Components/Global/Trending';
import TopRated from './Components/Global/TopRated';
import MovieCard, { movieCardLoader } from './Components/Movie/MovieCard';
import { seriesCardLoader } from './Components/Movie/SeriesCard';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/discover/movies' element={<Movies/>}/>
        <Route path='/discover/series' element={<Series/>}/>
        <Route path='/discover/upcoming' element={<Upcoming/>}/>

        <Route path='/discover/trending' element={<Trending/>}/>
        <Route path='/discover/top-rated' element={<TopRated/>}/>

        <Route path='/search/:text' element={<Search/>}/>
        <Route path='/discover/:id' element={<MovieCard/>} loader={movieCardLoader}/>
        <Route path='/discover/series/:ids' element={<MovieCard/>} loader={seriesCardLoader}/>
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
