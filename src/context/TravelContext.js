import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const TravelContext = createContext();

export const TravelProvider = ({ children }) => {


  const [results, setResults] = useState([]);


  useEffect(() => { getTravel() }, []);

  const getTravel = async () => {
    try {
      const response = await axios.get(newsCalls.travelNews)
      setResults(response.data.results)
    } catch (err) { console.log(err) }
  }

  return (
    <TravelContext.Provider value={[results, setResults]}>{children}</TravelContext.Provider>
  )
}
