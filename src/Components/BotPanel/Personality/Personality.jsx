import { progressBarFunction } from "../../BotDashboard/ProgressBar"
import { Link } from "react-router-dom"

export default function Personality() {
  return (
    <div>
        <Link to={'/'} className='btn'>Volver</Link>
        <Link to={'/services'} onClick={()=>progressBarFunction()} className='btn'>siguiente</Link>
    </div>
  )
}
