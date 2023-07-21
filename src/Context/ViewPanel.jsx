import {createContext, useState} from 'react'

const ViewPanelContext = createContext()

// eslint-disable-next-line react/prop-types
export function ViewPanelProvider({ children }){
    const [viewPanel, setViewPanel] = useState('Profile')

    return(
        <ViewPanelContext.Provider value={{viewPanel, setViewPanel}}>
            {children}
        </ViewPanelContext.Provider>
    )
}

export default ViewPanelContext