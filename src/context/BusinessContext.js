import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const BusinessContext = createContext();

export const BusinessProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getBusiness()}, []);

    const getBusiness = async() => {
        try{
            const inLocalStorage = localStorage.getItem('businessNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.businessNews)
                localStorage.setItem('businessNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <BusinessContext.Provider value={[results, setResults]}>{children}</BusinessContext.Provider>
  )
}
