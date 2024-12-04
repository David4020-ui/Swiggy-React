import React from 'react'
import TopBar from '../swiggy/components/TopBar'
import ItemsDisplay from '../swiggy/components/ItemsDisplay'
import Chains from '../swiggy/components/Chains'
import FirmCollections from '../swiggy/components/FirmCollections'

const LandingPage = () => {
  return (
    <div>
        <TopBar />
        <ItemsDisplay />
        <Chains />
        <FirmCollections />
    </div>
  )
}

export default LandingPage