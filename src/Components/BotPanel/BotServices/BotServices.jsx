import BotPanelHook from "../../../Hooks/BotPanelHook"
import { itemsBotPanel } from "../../../utilities/progressBar"

export default function BotServices() {
  const {PERSONALITY, BOT_META} = itemsBotPanel
  const {nextProcess, backProcess} = BotPanelHook()

  return (
    <div>
        <button onClick={()=>backProcess(PERSONALITY)} className='btn'>Volver</button>
        <button onClick={()=>nextProcess(BOT_META, 100)} className='btn'>siguiente</button>
    </div>
  )
}
