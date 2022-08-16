import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const TechnologyContext = createContext();

export const TechnologyProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getTechnology() }, []);

    const getTechnology = async () => {
        try {
            const response = await axios.get(newsCalls.technologyNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <TechnologyContext.Provider value={[results, setResults]}>{children}</TechnologyContext.Provider>
    )
}
