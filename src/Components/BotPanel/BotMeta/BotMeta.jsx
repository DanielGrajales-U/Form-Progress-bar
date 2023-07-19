import './BotMeta.css'
import { progressBarFunction } from '../../BotDashboard/ProgressBar'
import { Link } from 'react-router-dom'

export default function BotMeta() {
  return (
    <div>
        <Link to={'/services'} className='btn'>Volver</Link>
        <Link onClick={()=>progressBarFunction(25)} className='btn'>CrearBot</Link>
    </div>
  )
}
