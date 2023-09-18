import { useState, useEffect } from 'react';
import "./Numbers.css";

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
    const randomNumber = count => {
        return Math.ceil(Math.random() * count);
    }
    const [challenge, setChallenge] = useState(4);
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

    useEffect(() => {
        if (correctGuess) {
            setNumberOfGuesses(0);
            const updatedGuessList = guessList.filter(g => g.key !== challenge);
            setGuessList(updatedGuessList)
            if (updatedGuessList.length) {
                setChallenge(updatedGuessList[randomNumber(updatedGuessList.length) - 1].key)
            } else {
                setGameOver(true)
            }
            // console.log({ picked })
        }
    }, [totalGuesses]);

    const getNumber = e => {
        const correct = parseInt(e.target.id) === challenge
        setCorrectGuess(correct)
        if (correct) setPicked([...picked, challenge])
        setGuess(parseInt(e.target.id))
        setNumberOfGuesses(prev => prev + 1)
        setTotalGuesses(prev => prev + 1)
    }
    return (
        <>
            <h1>numbers</h1>
            <select onChange={e => setNumberNames(language[e.target.value])}>
                {Object.keys(language).map(lang => <option key={lang}>{lang}</option>)}
            </select>
            <button onClick={reset}>Reset Game</button>
            {gameOver ? <h4>Game Over :  {(count / totalGuesses * 100).toFixed(2)}%</h4> : <h4>"{numberNames[challenge - 1]}"</h4>}

            <div className="numbers">
                {numbers.map(n => <button onClick={e => getNumber(e)} id={n.key} key={n.key}
                    className={[
                        gameOver ? "game-over" :
                            correctGuess && guess === n.key ? "right" :
                                !correctGuess && guess === n.key ? "wrong" :
                                    numberOfGuesses > 2 && challenge === n.key ? " hint" :
                                        "", picked.includes(n.key) ? " picked" : ""].join(' ')}>{n.value}</button>
                )}
            </div>

            {gameOver && <div></div>}
        </>
    )
}