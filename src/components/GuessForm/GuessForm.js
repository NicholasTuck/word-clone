import React from "react";

function GuessForm() {

    const [guess, setGuess] = React.useState("");

    return <>
        <form className="guess-input-wrapper" onSubmit={onGuess}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text"
                   minLength={5} maxLength={5}
                   pattern="[A-Z]{5}"
                   title="Enter a 5-letter word, using only the letters A-Z."
                   value={guess}
                   onChange={onGuessInputChange} />
        </form>
    </>;

    function onGuessInputChange(event) {
        const upperCaseGuess = event.target.value.toUpperCase();
        setGuess(upperCaseGuess);
    }

    function onGuess(event) {
        event.preventDefault();
        console.log(`Guess: ${guess}`);
        setGuess("");
    }

}

export default GuessForm;
