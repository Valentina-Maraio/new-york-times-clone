import React, { useContext } from 'react'
import { BooksContext } from '../../context/BooksContext'
import { Collapse, Text, Link, Spacer} from "@nextui-org/react";

const Books = () => {
  const [results] = useContext(BooksContext)
  return (
    <div>
      <h2>Books</h2>
      <Collapse.Group>
        {results.map((result) => (
          <>
            <Collapse title={result.title}>
              <Text>
                {result.abstract}
              </Text>
              <Text b>{result.kicker}</Text>
              <Spacer y={0.5} />
              <Link target="_blank" color="success" href={result.url}>{result.url}</Link>
            </Collapse>
          </>
        ))}
      </Collapse.Group>
    </div>
  )
}

export default Books