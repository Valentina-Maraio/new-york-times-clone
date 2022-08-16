import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const BusinessContext = createContext();

export const BusinessProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getBusiness() }, []);

    const getBusiness = async () => {
        try {
            const response = await axios.get(newsCalls.businessNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <BusinessContext.Provider value={[results, setResults]}>{children}</BusinessContext.Provider>
    )
}
