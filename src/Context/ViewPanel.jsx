import {createContext, useState} from 'react'
import { itemsBotPanel } from '../utilities/progressBar'

const ViewPanelContext = createContext()

// eslint-disable-next-line react/prop-types
export function ViewPanelProvider({ children }){
    const [viewPanel, setViewPanel] = useState(itemsBotPanel.PROFILE)

    return(
        <ViewPanelContext.Provider value={{viewPanel, setViewPanel}}>
            {children}
        </ViewPanelContext.Provider>
    )
}

export default ViewPanelContext