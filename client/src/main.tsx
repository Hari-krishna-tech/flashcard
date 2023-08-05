import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider, 
  Route,
} from "react-router-dom"
import Deck from './Deck.tsx'
import './index.css'
import Header from './Header.tsx'
import Login from './Login.tsx'

const BrowserRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  
},
 {
  path: "login",
  element: <Login />
 },
{
  path: "/decks/:deckId",
  element: <Deck />
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header></Header>
    <RouterProvider router={BrowserRouter} / >
  </React.StrictMode>
);
