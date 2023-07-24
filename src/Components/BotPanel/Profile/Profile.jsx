import BotPanelHook from "../../../Hooks/BotPanelHook"
import { itemsBotPanel } from "../../../utilities/progressBar"

export default function Profile() {

  const { PERSONALITY } = itemsBotPanel
  const {nextProcess} = BotPanelHook()

  return (
    <div>
        <button onClick={()=> nextProcess(PERSONALITY, 25)} className='btn'>siguiente</button>
    </div>
  )
}
