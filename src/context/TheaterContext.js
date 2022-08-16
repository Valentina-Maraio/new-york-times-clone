import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const TheaterContext = createContext();

export const TheaterProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getTheatre() }, []);

    const getTheatre = async () => {
        try {
            const response = await axios.get(newsCalls.theaterNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <TheaterContext.Provider value={[results, setResults]}>{children}</TheaterContext.Provider>
    )
}
