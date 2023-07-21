import { progressBarFunction } from "../../BotDashboard/ProgressBar"
import { Link } from "react-router-dom"

export default function Profile() {
  return (
    <div>
        <Link to={'/personality'} onClick={()=>progressBarFunction()} className='btn'>siguiente</Link>
    </div>
  )
}
