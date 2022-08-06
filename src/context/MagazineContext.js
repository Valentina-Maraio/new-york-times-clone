import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const MagazineContext = createContext();

export const MagazineProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getMagazine()}, []);

    const getMagazine = async() => {
        try{
            const inLocalStorage = localStorage.getItem('magazineNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.magazineNews)
                localStorage.setItem('magazineNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <MagazineContext.Provider value={[results, setResults]}>{children}</MagazineContext.Provider>
  )
}
