
import { BrowserRouter, Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import RootLayout from './Layouts/RootLayout';
import HomePage from './Pages/HomePage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
