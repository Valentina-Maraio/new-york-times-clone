import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const HealthContext = createContext();

export const  HealthProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getHealth()}, []);

    const getHealth = async() => {
        try{
            const inLocalStorage = localStorage.getItem('healthNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.healthNews)
                localStorage.setItem('healthNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <HealthProvider.Provider value={[results, setResults]}>{children}</HealthProvider.Provider>
  )
}
