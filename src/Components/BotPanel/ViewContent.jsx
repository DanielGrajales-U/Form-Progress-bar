import  { useContext } from "react"
import { itemsBotPanel } from "../../utilities/progressBar"

import Profile from "./Profile/Profile"
import Personality from "./Personality/Personality"
import BotServices from "./BotServices/BotServices"
import BotMeta from "./BotMeta/BotMeta"
import ViewPanelContext from "../../Context/ViewPanel"

// eslint-disable-next-line react/prop-types
export default function ViewContent() {
  const {PROFILE, PERSONALITY, BOT_SERVICE, BOT_META} = itemsBotPanel

  const {viewPanel} = useContext(ViewPanelContext)
    
 console.log(viewPanel)

  if(viewPanel === PROFILE) return <Profile />
  if(viewPanel === PERSONALITY) return <Personality />
  if(viewPanel === BOT_SERVICE) return <BotServices />
  if(viewPanel === BOT_META) return <BotMeta />
}
