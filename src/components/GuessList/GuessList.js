import React from "react";
import {range} from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import Guess from '../Guess';

function GuessList({guesses}) {
    return <>
        <div className="guess-results">
            {range(0, NUM_OF_GUESSES_ALLOWED).map((guessIndex) => {

                return (
                    <p className="guess" key={guessIndex}>
                        <Guess guess={guesses[guessIndex]}/>
                    </p>
                )
            })}
        </div>
    </>;
}

export default GuessList;
