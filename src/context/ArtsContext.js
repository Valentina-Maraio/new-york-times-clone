import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const ArtsContext = createContext();

export const ArtsProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getArts()}, []);

    const getArts = async() => {
        try{
            const inLocalStorage = localStorage.getItem('artNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.artNews)
                localStorage.setItem('artNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <ArtsContext.Provider value={[results, setResults]}>{children}</ArtsContext.Provider>
  )
}
