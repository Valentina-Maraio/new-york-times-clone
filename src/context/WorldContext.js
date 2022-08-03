import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall';

export const WorldContext = createContext();

export const WorldProvider = ({ children }) => {
    const [results, setResults] = useState([]);

    useEffect(() => { getWorld() }, []);

    const getWorld = async() => {
        try {
            const inLocalStorage = localStorage.getItem('worldNews')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.worldNews)
                localStorage.setItem('worldNews', JSON.stringify(response.data.results))
            }
        } catch(error) {console.log(error)}
    }

    return (
        <WorldContext.Provider value={[results, setResults]}>{children}</WorldContext.Provider>
    )
}