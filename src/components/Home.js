import React from 'react'
import Banner from './Banner'
import FakeAds from './FakeAds'
import Ads from './Ads'
import Menu from './Menu'
import Games from './Games'
import SpecialAuthor from '../pages/SpecialAuthor'
import { Spacer } from "@nextui-org/react";


const Home = () => {
  return (
    <div>
      <Banner />
      <Menu />
      <Spacer />
      <FakeAds />
      <Spacer />
      <SpecialAuthor />
      <Spacer />
      <Games />
      <Ads />
    </div>
  )
}

export default Home
