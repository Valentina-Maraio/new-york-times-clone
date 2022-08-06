import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const TheatreContext = createContext();

export const TheatreProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getTheatre()}, []);

    const getTheatre = async() => {
        try{
            const inLocalStorage = localStorage.getItem('theaterNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.theaterNews)
                localStorage.setItem('theaterNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <TheatreContext.Provider value={[results, setResults]}>{children}</TheatreContext.Provider>
  )
}
