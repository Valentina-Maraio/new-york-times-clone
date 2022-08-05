import React from 'react'
import { NewsProvider } from '../context/NewsContext'
import { WorldProvider } from '../context/WorldContext'
import AllNews from './AllNews'
import Banner from './Banner'
import Selection from './Selection'
import Show from './Show'

const Home = () => {
  return (
    <div>
      <Banner />
      <Selection />
      <NewsProvider>
        <AllNews />
      </NewsProvider>
      <WorldProvider>
        <Show />
      </WorldProvider>
    </div>
  )
}

export default Home


