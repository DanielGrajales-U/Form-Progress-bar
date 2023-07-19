import React from 'react'
import { Outlet } from 'react-router'
import BotDashboard from '../../Components/BotDashboard/BotDashboard'

import './BotPanel.css'

export default function BotPanel() {
  return (
    <React.Fragment >
        <div className='bot-panel'> 
            <BotDashboard />
            <Outlet />
        </div>
    </React.Fragment>
  )
}
