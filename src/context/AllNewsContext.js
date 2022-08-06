import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const AllNewsContext = createContext();

export const AllNewsProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getNews()}, []);

    const getNews = async() => {
        try{
            const inLocalStorage = localStorage.getItem('allNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.allNews)
                localStorage.setItem('allNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <AllNewsContext.Provider value={[results, setResults]}>{children}</AllNewsContext.Provider>
  )
}
