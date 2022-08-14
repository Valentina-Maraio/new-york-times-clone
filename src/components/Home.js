import React from 'react'
import { AllNewsProvider } from '../context/AllNewsContext'
import Banner from './Banner'
import Menu from './Menu'
import AllNews from './AllNews'
import Res from './Res'

const Home = () => {
  return (
    <div>
      <Banner />
      <Menu />
      <AllNewsProvider>
        <Res />
      </AllNewsProvider>
    </div>
  )
}

export default Home


