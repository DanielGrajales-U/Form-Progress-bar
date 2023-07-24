import React, { useContext } from 'react'
import { items } from './itemsDashboard'

import './BotDashboard.css'
import ViewPanelContext from '../../Context/ViewPanel'

export default function BotDashboard() {

  const {viewPanel} = useContext(ViewPanelContext)
  
  return (
    <React.Fragment>
      <div className='bot-dashboard'>
        <h1>Formulario</h1>
        <ul className='list-items'>
          {
            items.map(e =>(
              <li key={e.id} className={`item-dashboard ${viewPanel === e.label ? "active" : ""}`}>
                <p>{e.label}</p>
              </li>
            ))
          }
        </ul>
        <div className='progress-loader'>
					<div className='progress'></div>
				</div>
      </div>
    </React.Fragment>
  )
}
