import React, { useContext } from 'react'
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { HealthContext } from '../context/HealthContext'
import { Spacer } from "@nextui-org/react";

const Health = () => {
  const [results] = useContext(HealthContext);

  return (
    <div>
      <Spacer />
      <Grid.Container gap={2} justify="flex-start">
        {results.map((result, id) => (
          <Grid xs={6} sm={3} key={id}>
            <Card>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={result.multimedia && result.multimedia[2] ? result.multimedia[2].url : `https://via.placeholder.com/600/101824`} alt={result.title}
                ></Card.Image>
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{result.title}</Text>
                  <Card.Divider />
                  <Text>{result.multimedia && result.multimedia[2] ? result.multimedia[2].caption : ''}</Text>
                  <Card.Divider />
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    Copyright:  {result.multimedia && result.multimedia[2] ? result.multimedia[2].copyright : 'free'}
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

export default Health