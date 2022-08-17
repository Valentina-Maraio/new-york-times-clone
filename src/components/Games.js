import React from 'react'
import { Spacer, Grid, Image } from "@nextui-org/react";
import Chess from '../assets/games/Chess.png';
import Crossword from '../assets/games/Crossword.png';
import LetterBoxed from '../assets/games/LetterBoxed.png';
import SpellingBee from '../assets/games/SpellingBee.png';
import Tiles from '../assets/games/Tiles.png';
import Wordle from '../assets/games/Wordle.png';


const Games = () => {
  return (
    <div>
      <Spacer />
      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
                <Image
                isHoverable
                  width={'auto'}
                  height={'auto'}
                  src={Chess}
                  alt="Default Image"
                  autoResize={true}
                />
        </Grid>
        <Grid xs={4}>
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={Crossword}
                  alt="Default Image"
                  autoResize={true}
                />
         </Grid>
        <Grid xs={4}>
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={LetterBoxed}
                  alt="Default Image"
                  autoResize={true}
                />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={SpellingBee}
                  alt="Default Image"
                  autoResize={true}
                />
        </Grid>
        <Grid xs={4}>
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={Tiles}
                  alt="Default Image"
                  autoResize={true}
                />
        </Grid>
        <Grid xs={4}>
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={Wordle}
                  alt="Default Image"
                  autoResize={true}
                />
        </Grid>
      </Grid.Container>
      <Spacer />
    </div>
  )
}

export default Games;
