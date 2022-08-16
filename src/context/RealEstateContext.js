import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const RealEstateContext = createContext();

export const RealEstateProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getRealEstate() }, []);

    const getRealEstate = async () => {
        try {
            const response = await axios.get(newsCalls.realestateNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <RealEstateContext.Provider value={[results, setResults]}>{children}</RealEstateContext.Provider>
    )
}
