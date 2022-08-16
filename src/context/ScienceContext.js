import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const ScienceContext = createContext();

export const ScienceProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getScience() }, []);

    const getScience = async () => {
        try {
            const response = await axios.get(newsCalls.scienceNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <ScienceContext.Provider value={[results, setResults]}>{children}</ScienceContext.Provider>
    )
}
