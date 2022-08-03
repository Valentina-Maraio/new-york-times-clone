import React, { useContext } from 'react';
import { NewsContext} from '../context/NewsContext'

const Home = () => {
    const [results] = useContext(NewsContext)
    return (
        <div>
            {results.map((result) => {
                return (
                    <div>
                        <h3>{result.title}</h3>
                        <img src={result.thumbnail_standard} alt={result.title}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Home