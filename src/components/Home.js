import React from 'react'
import { WorldProvider } from '../context/WorldContext'
import Banner from './Banner'
import World from './World'
import Selection from './Selection'

const Home = () => {
  return (
    <div>
        <Banner />
        <Selection />
    </div>
  )
}

export default Home


