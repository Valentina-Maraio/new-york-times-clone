import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const ScaryContext = createContext();

export const ScaryProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getArts() }, []);

    const getArts = async () => {
        try {
            const response = await axios.get(newsCalls.scaryCall)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <ScaryContext.Provider value={[results, setResults]}>{children}</ScaryContext.Provider>
    )
}
