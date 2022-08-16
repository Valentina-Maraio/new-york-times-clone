import React from 'react'
import { AllNewsProvider } from '../context/AllNewsContext'
import Banner from './Banner'
import CultureBanner from './CultureBanner'
import FakeAds from './FakeAds'
import Menu from './Menu'
import News from './News'
import Previews from './Previews'
//import AllNews from './AllNews'
//import Res from './Res'

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
      <CultureBanner />
    </div>
  )
}

export default Home


/*
      <AllNewsProvider>
        <Res />
      </AllNewsProvider>

      <AllNewsProvider>
        <News />
      </AllNewsProvider>
*/