import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import newsCalls from '../api/apiCall'

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {

    const [results, setResults] = useState([]);

    useEffect(() => { getBooks() }, []);

    const getBooks = async () => {
        try {
            const response = await axios.get(newsCalls.booksNews)
            setResults(response.data.results)
        } catch (err) { console.log(err) }
    }

    return (
        <BooksContext.Provider value={[results, setResults]}>{children}</BooksContext.Provider>
    )
}
