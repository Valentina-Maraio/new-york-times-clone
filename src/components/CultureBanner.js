import React from 'react'
import Button from 'react-bootstrap/Button'
import Divider from '@nextui-org/react/divider'
import Books from '../pages/samples/Books'
import Arts from '../pages/samples/Arts'
import Theater from '../pages/samples/Theater'
import { Grid } from "@nextui-org/react";

const CultureBanner = () => {
  return (
    <div>
      <Divider />
      <br />
      <Button>Culture News</Button>
      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
          <Books />
        </Grid>
        <Grid xs={4}>
          <Arts />
        </Grid>
        <Grid xs={4}>
          <Theater />
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default CultureBanner
