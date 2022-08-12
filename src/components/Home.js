import React from 'react'
import { AllNewsProvider } from '../context/AllNewsContext'
import { ArtsProvider } from '../context/ArtsContext'
import { WorldProvider } from '../context/WorldContext'
//import AllNews from './AllNews'
import Banner from './Banner'
import Selection from './Selection'
import AllNews from './AllNews'
import Arts from '../pages/Arts'
import World from '../pages/World'

const Home = () => {
  return (
    <div>
      <Banner />
      <Selection />
      <AllNewsProvider>
        <AllNews />
      </AllNewsProvider>
      <ArtsProvider>
        <Arts />
      </ArtsProvider>
      <WorldProvider>
        <World />
      </WorldProvider>
    </div>
  )
}

export default Home


