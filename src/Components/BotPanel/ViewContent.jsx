import  { useContext } from "react"

import Profile from "./Profile/Profile"
import Personality from "./Personality/Personality"
import BotServices from "./BotServices/BotServices"
import BotMeta from "./BotMeta/BotMeta"
import ViewPanelContext from "../../Context/ViewPanel"

// eslint-disable-next-line react/prop-types
export default function ViewContent() {

  const {viewPanel} = useContext(ViewPanelContext)
    
 console.log(viewPanel)

  if(viewPanel === 'Profile') return <Profile />
  if(viewPanel === 'Personality') return <Personality />
  if(viewPanel === 'BotServices') return <BotServices />
  if(viewPanel === 'BotMeta') return <BotMeta />
}
