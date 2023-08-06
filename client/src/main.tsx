import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider, 

} from "react-router-dom"
import Deck from './Deck.tsx'
import './index.css'
import Header from './Header.tsx'
import Login from './Login.tsx'
import Signup from './Signup.tsx'
import NotFound from './NotFound.tsx'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

const BrowserRouter = createBrowserRouter([{
  path: "/",
  element: <Layout> <App /> </Layout> , 
},
{
  path: "*",
  element: <Layout> <NotFound /> </Layout> ,
},
 {
  path: "login",
  element: <Login />
 },{
  path: "signup",
  element: <Signup />
 }, {
  path:  "decks/:deckId",
  element: <Layout><Deck/></Layout>
}
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   
    <RouterProvider router={BrowserRouter} / >
  </React.StrictMode>
);
