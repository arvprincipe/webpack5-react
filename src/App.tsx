import React from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/header'
// pages
import ErrorPage from "./error-page";
import Root from './routes/root';
import HomePage from './routes/home'
import AboutPage from './routes/about'
import Page2Page from './routes/page2'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    //loader: <LoaderElement />
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
    //loader: <LoaderElement />
  },
  {
    path: "/page-2",
    element: <Page2Page />,
    errorElement: <ErrorPage />,
    //loader: <LoaderElement />
  },
  {
    path: "/home-page",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    //loader: <LoaderElement />
  },
], { });

const LoaderElement = () => {
  return (<h3>LOADING...............!</h3>)
}

const App = () => {
  return (
    <RouterProvider 
      router={router} 
      fallbackElement={<LoaderElement />}
    />
  )
}

export default App;