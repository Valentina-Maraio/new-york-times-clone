import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const OpinionContext = createContext();

export const OpinionProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getOpinion() }, []);

    const getOpinion = async () => {
        try {
            const response = await axios.get(newsCalls.opinionNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <OpinionContext.Provider value={[results, setResults]}>{children}</OpinionContext.Provider>
    )
}
