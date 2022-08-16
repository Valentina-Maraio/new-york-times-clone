import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const SportsContext = createContext();

export const SportsProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getSports() }, []);

    const getSports = async () => {
        try {
            const response = await axios.get(newsCalls.sportsNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <SportsContext.Provider value={[results, setResults]}>{children}</SportsContext.Provider>
    )
}
