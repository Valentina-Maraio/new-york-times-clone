import React from 'react'
import Banner from './Banner'
import CultureBanner from './CultureBanner'
import Menu from './Menu'
import NewsBanner from './NewsBanner'
import Previews from './Previews'
//import AllNews from './AllNews'
//import Res from './Res'

const Home = () => {
  return (
    <div>
      <Banner />
      <Menu />
      <NewsBanner />
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