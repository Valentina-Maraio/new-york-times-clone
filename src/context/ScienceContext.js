import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const ScienceContext = createContext();

export const ScienceProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getScience()}, []);

    const getScience = async() => {
        try{
            const inLocalStorage = localStorage.getItem('scienceNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.scienceNews)
                localStorage.setItem('scienceNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <ScienceContext.Provider value={[results, setResults]}>{children}</ScienceContext.Provider>
  )
}
