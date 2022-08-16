import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const StyleContext = createContext();

export const StyleProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getStyle() }, []);

    const getStyle = async () => {
        try {
            const response = await axios.get(newsCalls.styleNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <StyleContext.Provider value={[results, setResults]}>{children}</StyleContext.Provider>
    )
}
