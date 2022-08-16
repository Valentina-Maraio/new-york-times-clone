import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const TravelContext = createContext();

export const TravelProvider = ({children}) => {


    const [results, setResults] = useState([]);


    useEffect(()=>{getTravel()}, []);

    const getTravel = async() => {
        try{
            const inLocalStorage = localStorage.getItem('travelNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.travelNews)
                localStorage.setItem('travelNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
                console.log(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <TravelContext.Provider value={[results, setResults]}>{children}</TravelContext.Provider>
  )
}
