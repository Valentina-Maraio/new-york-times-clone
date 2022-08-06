import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const SportsContext = createContext();

export const SportsProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getSports()}, []);

    const getSports = async() => {
        try{
            const inLocalStorage = localStorage.getItem('sportsNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.sportsNews)
                localStorage.setItem('sportsNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <SportsContext.Provider value={[results, setResults]}>{children}</SportsContext.Provider>
  )
}
