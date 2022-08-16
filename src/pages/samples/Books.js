import React, { useContext } from 'react'
import { ScaryContext } from '../../context/ScaryContext'

const Books = () => {
  const [results] = useContext(ScaryContext)
  return (
    <div>
      <h2>Books</h2>
        {results.map((result) => (
          <>
          <h3>{result.book_title}</h3>
          <h6>{result.book_author}</h6>
          <p>{result.summary}</p>
          </>
        ))}
    </div>
  )
}

export default Books