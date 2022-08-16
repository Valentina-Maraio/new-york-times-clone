import React from 'react'
import Books from '../pages/samples/Books'
import { Grid, Divider, Image } from "@nextui-org/react";
import { ScaryProvider } from '../context/ScaryContext'
import ScaryBooks from '../assets/ads/ScaryBooks.jpg';

const CultureBanner = () => {
  return (
    <div>
      <Divider />
      <Image
        width={'auto'}
        height={400}  
        src={ScaryBooks}
        alt="Default Image"
        autoResize={true}
      />
      <Grid.Container gap={4} justify="center">
        <Grid xs={12}>
          <ScaryProvider>
            <Books />
          </ScaryProvider>
        </Grid>
      </Grid.Container>
    </div>
  )
}

export default CultureBanner
