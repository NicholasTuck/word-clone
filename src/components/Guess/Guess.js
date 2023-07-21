import React from "react";
import {range} from '../../utils';
import {checkGuess} from '../../game-helpers';

// guess can be undefined to represent an empty yet to be guessed row
function Guess({guess, answer}) {
    if (!guess) {
        return range(0, 5).map((letterIndex) => {
            return <span className="cell" key={letterIndex}></span>
        });
    }

    const guessStatus = checkGuess(guess, answer);
    return guessStatus.map((status, letterIndex) => {
        return <span className={`cell ${status.status}`} key={letterIndex}>{status.letter}</span>
    });
}

export default Guess;
