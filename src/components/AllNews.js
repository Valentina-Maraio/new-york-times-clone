import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const AllNews = () => {
    const [results] = useContext(NewsContext);

  return (
    <div>
        {results.map((result) => {
            return (
                <div>
                    <h3>{result.title}</h3>
                    <h5>{result.section}</h5>
                    <h6>{result.subsection}</h6>
                    <p>{result.section}</p>
                    <p>{result.abstract}</p>
                </div>
            )
        })}
    </div>
  )
}

export default AllNews