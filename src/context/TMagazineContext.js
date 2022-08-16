import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const TMagazineContext = createContext();

export const TMagazineProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getTMagazine() }, []);

    const getTMagazine = async () => {
        try {
            const response = await axios.get(newsCalls.tmagazineNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <TMagazineContext.Provider value={[results, setResults]}>{children}</TMagazineContext.Provider>
    )
}
