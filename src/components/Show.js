import { Card, Grid, Row, Text } from "@nextui-org/react";
import {WorldContext} from '../context/WorldContext'
import React, {useContext} from 'react'

export default function Show() {
    const [results] = useContext(WorldContext)

  return (
    <Grid.Container gap={2} justify="flex-start">
      {results.map((result, id) => (
        <Grid xs={6} sm={3} key={id}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={result.thumbnail_standard}
                objectFit="cover"
                width="100%"
                height={140}
                alt={result.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{result.title}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
