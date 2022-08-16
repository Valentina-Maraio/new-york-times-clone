import React from 'react'
import { AllNewsProvider } from '../context/AllNewsContext'
import Banner from './Banner'
import CultureBanner from './CultureBanner'
import FakeAds from './FakeAds'
import Ads from './Ads'
import Menu from './Menu'
import News from './News'
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
      <CultureBanner />
      <Ads />
    </div>
  )
}

export default Home
