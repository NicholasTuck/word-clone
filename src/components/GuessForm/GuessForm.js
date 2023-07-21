import React from "react";

function GuessForm({disabled, onGuess}) {

    const [guess, setGuess] = React.useState("");

    return <>
        <form className="guess-input-wrapper" onSubmit={onGuessSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input" type="text"
                   disabled={disabled}
                   minLength={5} maxLength={5} required
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

    function onGuessSubmit(event) {
        event.preventDefault();
        console.log(`Guess: ${guess}`);
        onGuess(guess);
        setGuess("");

    }

}

export default GuessForm;
