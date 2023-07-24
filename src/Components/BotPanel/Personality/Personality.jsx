import BotPanelHook from "../../../Hooks/BotPanelHook"
import { itemsBotPanel } from "../../../utilities/progressBar"

export default function Personality() {

  const {PROFILE, BOT_SERVICE} = itemsBotPanel
  const {nextProcess, backProcess} = BotPanelHook()

  return (
    <div>
        <button onClick={()=>backProcess(PROFILE)} className='btn'>Volver</button>
        <button onClick={()=>nextProcess(BOT_SERVICE, 50)} className='btn'>siguiente</button>
    </div>
  )
}
