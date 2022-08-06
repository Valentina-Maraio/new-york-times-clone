import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const StyleContext = createContext();

export const StyleProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getStyle()}, []);

    const getStyle = async() => {
        try{
            const inLocalStorage = localStorage.getItem('styleNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.styleNews)
                localStorage.setItem('styleNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <StyleContext.Provider value={[results, setResults]}>{children}</StyleContext.Provider>
  )
}
