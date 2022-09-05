import React from 'react'
import Banner from './Banner'
import FakeAds from './FakeAds'
import Ads from './Ads'
import Menu from './Menu'
import Games from './Games'
import SpecialAuthor from '../pages/ScaryAuthor/SpecialAuthor'
import { Spacer } from "@nextui-org/react";
import { ScaryProvider } from '../context/ScaryContext'


const Home = () => {
  return (
    <div>
      <Banner />
      <Menu />
      <Spacer />
      <FakeAds />
      <Spacer />
      <ScaryProvider>
        <SpecialAuthor />
      </ScaryProvider>
      <Spacer />
      <Games />
      <Ads />
    </div>
  )
}

export default Home
