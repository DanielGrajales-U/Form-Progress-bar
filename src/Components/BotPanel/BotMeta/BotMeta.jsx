import './BotMeta.css'
import { itemsBotPanel } from '../../../utilities/progressBar'
import BotPanelHook from '../../../Hooks/BotPanelHook'

export default function BotMeta() {
  const {BOT_SERVICE} = itemsBotPanel
  const {backProcess} = BotPanelHook()

  return (
    <div>
        <button onClick={()=>backProcess(BOT_SERVICE)} className='btn'>Volver</button>
        <button  className='btn'>CrearBot</button>
    </div>
  )
}
