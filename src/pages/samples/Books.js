import React, { useContext } from 'react'
import { ScaryContext } from '../../context/ScaryContext'
import { Card, Grid, Row, Text } from "@nextui-org/react";

const Books = () => {

  const [results] = useContext(ScaryContext)
  return (
    <div>
      <h2>Books</h2>
      <Grid.Container gap={2} justify="flex-start">
        {results.map((result, id) => (
          <Grid xs={6} sm={3} key={id}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{result.book_title}</Text>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {result.publication_dt}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  )
}

export default Books