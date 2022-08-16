import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const WorldContext = createContext();

export const WorldProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getWorld() }, []);

    const getWorld = async () => {
        try {
            const response = await axios.get(newsCalls.worldNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <WorldContext.Provider value={[results, setResults]}>{children}</WorldContext.Provider>
    )
}
