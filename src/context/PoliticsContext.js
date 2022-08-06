import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const PoliticsContext = createContext();

export const PoliticsProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getPolitics()}, []);

    const getPolitics = async() => {
        try{
            const inLocalStorage = localStorage.getItem('politicsNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.politicsNews)
                localStorage.setItem('politicsNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <PoliticsContext.Provider value={[results, setResults]}>{children}</PoliticsContext.Provider>
  )
}
