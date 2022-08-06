import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const FoodContext = createContext();

export const FoodProvider = ({children}) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{getFood()}, []);

    const getFood = async() => {
        try{
            const inLocalStorage = localStorage.getItem('foodNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.foodNews)
                localStorage.setItem('foodNews', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch(err){console.log(err)}
    }

  return (
    <FoodContext.Provider value={[results, setResults]}>{children}</FoodContext.Provider>
  )
}
