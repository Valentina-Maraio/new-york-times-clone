import React from 'react'
import { AllNewsProvider } from '../context/AllNewsContext'
import Banner from './Banner'
import FakeAds from './FakeAds'
import Ads from './Ads'
import Menu from './Menu'
import News from './News'
import Games from './Games'
import Previews from './Previews'
import { Spacer } from "@nextui-org/react";


const Home = () => {
  return (
    <div>
      <Banner />
      <Menu />
      <Spacer />
      <AllNewsProvider>
        <News />
      </AllNewsProvider>
      <Spacer />
      <Spacer />
      <FakeAds />
      <Spacer />
      <Previews />
      <br />
      <Spacer />
      <Spacer />
      <Games />
      <Ads />
    </div>
  )
}

export default Home
