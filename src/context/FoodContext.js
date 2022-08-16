import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getFood() }, []);

    const getFood = async () => {
        try {
            const response = await axios.get(newsCalls.foodNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <FoodContext.Provider value={[results, setResults]}>{children}</FoodContext.Provider>
    )
}
