import React from 'react'
import { AllNewsProvider } from '../context/AllNewsContext'
import Banner from './Banner'
import FakeAds from './FakeAds'
import Ads from './Ads'
import Menu from './Menu'
import News from './News'
import Games from './Games'
import Previews from './Previews'
import { Divider } from "@nextui-org/react";


const Home = () => {
  return (
    <div>
      <Banner />
      <Menu />
      <AllNewsProvider>
        <News />
      </AllNewsProvider>
      <FakeAds />
      <Previews />
      <br />
      <Divider />
      <Games />
      <Ads />
    </div>
  )
}

export default Home
