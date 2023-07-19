import {createContext, useState} from 'react'

const progressBarContext = createContext()

export function progressBarProvider({children}){

    const {progressBar, setProgressBar} = useState(0)

    return(
        <progressBarContext.Provider value={{progressBar, setProgressBar}}>
            {children}
        </progressBarContext.Provider>
    )
}

export default progressBarContext