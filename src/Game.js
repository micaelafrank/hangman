import React, { useState, useEffect } from "react";

function Game(){
    const [correctGuess, setCorrectGuess] = useState([]);
    const word = "HANGMAN".toUpperCase();
    const alphabets = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]

    const maskedWord = word.split("").map(letter => correctGuess.includes(letter) ? letter : "_").join(" ")
    
    return (
        <div>
            <p>
                {maskedWord}
            </p>

            <div>
                Pick A Letter
                {alphabets.map((alphabet, index) =>
                    <button
                        key={index}
                        onClick={() => {
                            if (word.includes(alphabet)) {
                                setCorrectGuess([...correctGuess, alphabet])
                                let className = 'correctGuess';
                            }
                            // alphabet.style.className = "correctGuess";
                        }}
                        className = {className}
                    > {alphabet}</button>
                )}
            </div>
        </div>
    )
}

export default Game;