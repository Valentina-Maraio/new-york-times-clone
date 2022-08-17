import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const HealthContext = createContext();

export const HealthProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getHealth() }, []);

    const getHealth = async () => {
        try {
            const response = await axios.get(newsCalls.healthNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <HealthContext.Provider value={[results, setResults]}>{children}</HealthContext.Provider>
    )
}
