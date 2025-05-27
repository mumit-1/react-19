import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Router from './Router.jsx'
import { RouterProvider } from 'react-router-dom'
import Provider from './Provider/Provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <RouterProvider router={Router}/>
    </Provider>
  </StrictMode>,
)
