import React from 'react'
import Chess from '../assets/games/Chess.png';
import Crossword from '../assets/games/Crossword.png';
import LetterBoxed from '../assets/games/LetterBoxed.png';
import SpellingBee from '../assets/games/SpellingBee.png';
import Tiles from '../assets/games/Tiles.png';
import Wordle from '../assets/games/Wordle.png';


const Games = () => {
  return (
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
          <img src={Chess} class="rounded float-start mg-fluid" alt="chess" />
          </div>
          <div class="col-6">
          <img src={Crossword} class="rounded float-start mg-fluid" alt="chess" />
          </div>
          <div class="col-6">
          <img src={LetterBoxed} class="rounded float-start mg-fluid" alt="chess" />
          </div>
          <div class="col-6">
          <img src={SpellingBee} class="rounded float-start mg-fluid" alt="chess" />
          </div>
          <div class="col-6">
          <img src={Tiles} class="rounded float-start mg-fluid" alt="chess" />
          </div>
          <div class="col-6">
          <img src={Wordle} class="rounded float-start mg-fluid" alt="chess" />
          </div>
        </div>
      </div>
  )
}

export default Games;
