import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const OpinionContext = createContext();

export const OpinionProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getOpinion()}, []);

    const getOpinion = async() => {
        try{
            const inLocalStorage = localStorage.getItem('opinionNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.opinionNews)
                localStorage.setItem('opinionNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <OpinionContext.Provider value={[results, setResults]}>{children}</OpinionContext.Provider>
  )
}
