import { Card, Grid, Row, Text } from "@nextui-org/react";
import {AllNewsContext} from '../context/AllNewsContext'
import React, {useContext} from 'react'

export default function Show() {
    const [results] = useContext(AllNewsContext)

  return (
    <Grid.Container gap={2} justify="flex-start">
      {results.map((result, id) => (
        <Grid xs={6} sm={3} key={id}>
          <Card isPressable onClick={()=>alert('ciao')}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
              src={result.multimedia[2].url} alt={result.title}
              ></Card.Image>
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{result.title}</Text>
                <Card.Divider />
                <Text>{result.multimedia[2].caption}</Text>
                <Card.Divider />
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                Copyright:  {result.multimedia[2].copyright}
                </Text>
              </Row>              
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
