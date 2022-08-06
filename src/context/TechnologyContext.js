import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const TechnologyContext = createContext();

export const TechnologyProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getTechnology()}, []);

    const getTechnology = async() => {
        try{
            const inLocalStorage = localStorage.getItem('technologyNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.technologyNews)
                localStorage.setItem('technologyNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <TechnologyContext.Provider value={[results, setResults]}>{children}</TechnologyContext.Provider>
  )
}
