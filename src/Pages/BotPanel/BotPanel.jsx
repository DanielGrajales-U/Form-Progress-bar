import React from 'react'
import BotDashboard from '../../Components/BotDashboard/BotDashboard'

import './BotPanel.css'
import ViewContent from '../../Components/BotPanel/ViewContent'
import { ViewPanelProvider } from '../../Context/ViewPanel'

export default function BotPanel() {
  return (
    <React.Fragment >
      <ViewPanelProvider>
        <div className='bot-panel'> 
            <BotDashboard />
            <ViewContent/>
        </div>
      </ViewPanelProvider>
    </React.Fragment>
  )
}
