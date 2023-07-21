import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BotPanel from './Pages/BotPanel/BotPanel.jsx'

const routes = createBrowserRouter([
  {
    path: '/*',
    element: <BotPanel/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
