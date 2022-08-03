import React from 'react'
import AllNews from './AllNews'
import {NewsProvider} from '../context/NewsContext'

const Home = () => {
    return (
        <div>
            <NewsProvider>
                <AllNews />
            </NewsProvider>
        </div>
    )
}

export default Home