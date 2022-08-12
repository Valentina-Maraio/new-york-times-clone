import React, { useContext } from 'react'
import Banner from '../components/Banner';
import Selection from '../components/Selection';
import { Card, Grid, Text } from '@nextui-org/react'
import { ArtsContext } from '../context/ArtsContext';

const Arts = () => {
  const [results] = useContext(ArtsContext)

  return (
    <div>
      <Banner />
      <Selection />
      <Grid.Container gap={2} justify="flex-start">
        {results.map((result) => (
          <Grid xs={6} sm={3} key={result.id}>
            <Card isPressable onClick={() => alert('ciao')}>
              <Card.Body css={{ p: 0 }}>
                <Text b>{result.title}</Text>
                <Card.Divider />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  )
}

export default Arts