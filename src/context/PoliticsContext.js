import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const PoliticsContext = createContext();

export const PoliticsProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getPolitics() }, []);

    const getPolitics = async () => {
        try {
            const response = await axios.get(newsCalls.politicsNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <PoliticsContext.Provider value={[results, setResults]}>{children}</PoliticsContext.Provider>
    )
}
