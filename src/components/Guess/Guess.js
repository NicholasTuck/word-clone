import React from "react";
import {range} from '../../utils';

// guess can be undefined to represent an empty yet to be guessed row
function Guess({guess}) {
    return range(0, 5).map((letterIndex) => {
        return <span className="cell" key={letterIndex}>{guess?.[letterIndex]}</span>
    })
}

export default Guess;
