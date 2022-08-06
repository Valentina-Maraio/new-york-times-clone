import React from 'react'
import { AllNewsProvider } from '../context/AllNewsContext'
//import { WorldProvider } from '../context/WorldContext'
//import AllNews from './AllNews'
import Banner from './Banner'
import Selection from './Selection'
import Show from './Show'

const Home = () => {
  return (
    <div>
      <Banner />
      <Selection />
      <AllNewsProvider>
        <Show />
      </AllNewsProvider>
    </div>
  )
}

export default Home


