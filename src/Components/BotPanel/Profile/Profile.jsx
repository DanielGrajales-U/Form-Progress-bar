import { progressBarFunction } from "../../BotDashboard/ProgressBar"
import { Link } from "react-router-dom"

export default function Profile() {
  return (
    <div>
        <Link to={'/personality'} onClick={()=>progressBarFunction(25)} className='btn'>siguiente</Link>
    </div>
  )
}
