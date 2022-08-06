import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const USContext = createContext();

export const USProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getUS()}, []);

    const getUS = async() => {
        try{
            const inLocalStorage = localStorage.getItem('usNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.usNews)
                localStorage.setItem('usNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <USContext.Provider value={[results, setResults]}>{children}</USContext.Provider>
  )
}
