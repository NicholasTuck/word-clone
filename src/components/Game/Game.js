import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessForm from '../GuessForm';
import GuessList from '../GuessList';
import GameOverBanner from '../GameOverBanner';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const gameOver = guesses.length === NUM_OF_GUESSES_ALLOWED || guesses[guesses.length - 1] === answer;
    const wonGame = guesses[guesses.length - 1] === answer;

    return <>
        {gameOver && (
            <GameOverBanner wonGame={wonGame} numberOfGuesses={guesses.length} answer={answer} />
        )}
        <GuessList guesses={guesses} answer={answer} />
        {!gameOver && <GuessForm disabled={gameOver} onGuess={(guess) => setGuesses([...guesses, guess])} />}
    </>;
}

export default Game;
