import React from "react";

function GameOverBanner({wonGame, numberOfGuesses, answer}) {
    if (wonGame) {
        return <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in <strong>{numberOfGuesses} guesses</strong>.
            </p>
        </div>
    } else {
        return <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
    }
}

export default GameOverBanner;
