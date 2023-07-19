import React from 'react'
import { items } from './itemsDashboard'
import { Link } from 'react-router-dom'

import './BotDashboard.css'

export default function BotDashboard() {
  
  return (
    <React.Fragment>
      <div className='bot-dashboard'>
        <h1>Formulario</h1>
        <ul className='list-items'>
          {
            items.map(e =>(
              <li key={e.id} className='item-dashboard'>
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
