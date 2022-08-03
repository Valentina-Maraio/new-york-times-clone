import React, { useContext } from 'react'
import {WorldContext} from '../context/WorldContext'

const World = () => {
    const [results] = useContext(WorldContext)

  return (
    <div>
        {results.map((result) => {
            return(
                <div>
                    <h3>{result.title}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default World