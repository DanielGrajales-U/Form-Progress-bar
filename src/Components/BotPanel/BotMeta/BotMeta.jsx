import './BotMeta.css'
import { itemsBotPanel } from '../../../utilities/progressBar'
import BotPanelHook from '../../../Hooks/BotPanelHook'

export default function BotMeta() {
  const {BOT_SERVICE} = itemsBotPanel
  const {nextProcess, backProcess} = BotPanelHook()

  return (
    <div>
        <button onClick={()=>backProcess(BOT_SERVICE)} className='btn'>Volver</button>
        <button onClick={()=>nextProcess('', 150)} className='btn'>CrearBot</button>
    </div>
  )
}
