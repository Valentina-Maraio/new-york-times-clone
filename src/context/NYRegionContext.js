import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const NYRegionContext = createContext();

export const NYRegionProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getNYRegion() }, []);

    const getNYRegion = async () => {
        try {
            const response = await axios.get(newsCalls.nyregionNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <NYRegionContext.Provider value={[results, setResults]}>{children}</NYRegionContext.Provider>
    )
}
