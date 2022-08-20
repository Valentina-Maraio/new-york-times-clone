import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const ScaryContext = createContext();

export const ScaryProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getArts() }, []);

    const getArts = async () => {
        try {
            const inLocalStorage = localStorage.getItem('scary')
            if(inLocalStorage){
                setResults(JSON.parse(inLocalStorage))
            } else {
                const response = await axios.get(newsCalls.scaryCall)
                localStorage.setItem('scary', JSON.stringify(response.data.results))
                setResults(response.data.results)
            }
        } catch (err) { console.log(err) }
    }

    return (
        <ScaryContext.Provider value={[results, setResults]}>{children}</ScaryContext.Provider>
    )
}
