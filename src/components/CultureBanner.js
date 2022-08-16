import React from 'react'
import Books from '../pages/samples/Books'
import { Grid, Divider } from "@nextui-org/react";
import { BooksProvider } from '../context/BooksContext'

const CultureBanner = () => {
  return (
    <div>
      <Divider />
      <br />
      <Grid.Container gap={2} justify="center">
        <Grid xs={8}>
          <BooksProvider>
            <Books />
          </BooksProvider>
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default CultureBanner
