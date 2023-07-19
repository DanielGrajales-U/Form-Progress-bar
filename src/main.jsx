import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BotPanel from './Pages/BotPanel/BotPanel.jsx'
import Profile from './Components/BotPanel/Profile/Profile'
import Personality from './Components/BotPanel/Personality/Personality'
import BotServices from './Components/BotPanel/BotServices/BotServices'
import BotMeta from './Components/BotPanel/BotMeta/BotMeta'

const routes = createBrowserRouter([
  {
    path: '/*',
    element: <BotPanel/>,
    children:[
      {
        path: '',
        element: <Profile />
      },
      {
        path: 'personality',
        element: <Personality />
      },
      {
        path: 'services',
        element: <BotServices />
      },
      {
        path: 'meta',
        element: <BotMeta />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
