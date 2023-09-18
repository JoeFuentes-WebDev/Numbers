import { useState } from 'react';
import "./Numbers.scss";

export const Numbers = () => {

    const [correctGuess, setCorrectGuess] = useState(null)
    const [guess, setGuess] = useState(null)
    const [numberOfGuesses, setNumberOfGuesses] = useState(0)
    const [totalGuesses, setTotalGuesses] = useState(0);
    const [picked, setPicked] = useState([])
    const count = 9;
    const numbers = [];

    const language = {
        english: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        italian: ['uno', 'due', 'tre', 'qyattro', 'cinque', 'sei', 'sette', 'otto', 'nove'],
        french: ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'],
        japanese: ['いち', 'に', 'さん', 'し、よん', 'ご', 'ろく', 'しち、なな', 'はち', 'きゅう、く'],
        spanish: ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']
    }

    const [numberNames, setNumberNames] = useState(language['english'])

    for (let i = 1; i <= count; i++) {
        numbers.push({ key: i, value: i })
    }
    const randomNumber = items => {
        return Math.ceil(Math.random() * items);
    }
    const [challenge, setChallenge] = useState(randomNumber(9));
    const [guessList, setGuessList] = useState(numbers);
    const [gameOver, setGameOver] = useState(false)

    const reset = () => {
        setCorrectGuess(false);
        setGuess(null);
        setNumberOfGuesses(0)
        setTotalGuesses(0);
        setGameOver(false);
        setGuessList(numbers)
        setChallenge(randomNumber(count))
        setPicked([])
    }

    const getNumber = e => {
        const correct = parseInt(e.target.id) === challenge
        setCorrectGuess(correct)
        if (correct) {
            setPicked([...picked, challenge]);
            setNumberOfGuesses(0);
            const updatedGuessList = guessList.filter(g => g.key !== challenge);
            setGuessList(updatedGuessList)
            if (updatedGuessList.length) {
                setChallenge(updatedGuessList[randomNumber(updatedGuessList.length) - 1].key)
            } else {
                setGameOver(true)
            }
        }
        setGuess(parseInt(e.target.id))
        setNumberOfGuesses(prev => prev + 1)
        setTotalGuesses(prev => prev + 1)
    }
    return (
        <>
            <h1>Numbers</h1>
            <select onChange={e => setNumberNames(language[e.target.value])}>
                {Object.keys(language).map(lang => <option key={lang}>{lang}</option>)}
            </select>
            <button className="reset" onClick={reset}>Reset Game</button>
            {gameOver ?
                <h5>Game Over :  {(count / totalGuesses * 100).toFixed(2)}%</h5> :
                <h4>"{numberNames[challenge - 1]}"</h4>
            }

            <div className="numbers">
                {numbers.map(n => <button onClick={e => getNumber(e)} id={n.key} key={n.key}
                    disabled={picked.includes(n.key)}
                    className={[
                        gameOver ? "game-over" :
                            correctGuess && guess === n.key ? "right" :
                                !correctGuess && guess === n.key ? "wrong" :
                                    numberOfGuesses > 3 && challenge === n.key ? " hint" :
                                        "", picked.includes(n.key) ? " picked" : ""].join(' ')}>{n.value}</button>
                )}
            </div>

            {gameOver && <div></div>}
        </>
    )
}