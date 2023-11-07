
import { BrowserRouter, Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import RootLayout from './Layouts/RootLayout';
import HomePage from './Pages/HomePage';
import Search from './Components/Search/Search';
import About from './Components/Global/About';
import Movies from './Components/Global/Movies';
import Series from './Components/Global/Series';
import Upcoming from './Components/Global/Upcoming';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/discover/movies' element={<Movies/>}/>
        <Route path='/discover/series' element={<Series/>}/>
        <Route path='/discover/upcoming' element={<Upcoming/>}/>
        <Route path='/search/:text' element={<Search/>}/>
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
