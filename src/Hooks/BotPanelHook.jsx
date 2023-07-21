import React, { useContext } from 'react'
import ViewPanelContext from '../Context/ViewPanel'
import { progressBarFunction } from '../Components/BotDashboard/ProgressBar'

export default function BotPanelHook() {
  
    const {viewPanel, setViewPanel} = useContext(ViewPanelContext)

    const nextProcess = (view) => {
        setViewPanel(view)
        progressBarFunction()
    }

    const backProcess = (view) => {
        setViewPanel(view)
    }

    return {nextProcess, backProcess}
}
