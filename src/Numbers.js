import { useState } from 'react';
import "./Numbers.scss";
import { NumbersData } from './data/NumbersData'
import { utils } from './utils';

export const Numbers = () => {

    const [correctGuess, setCorrectGuess] = useState(null)
    const [guess, setGuess] = useState(null)
    const [numberOfGuesses, setNumberOfGuesses] = useState(0)
    const [totalGuesses, setTotalGuesses] = useState(0);
    const [picked, setPicked] = useState([])
    const count = 9;
    const numbers = [];

    const [numberNames, setNumberNames] = useState(NumbersData['english'])

    for (let i = 1; i <= count; i++) {
        numbers.push({ key: i, value: i })
    }

    const [challenge, setChallenge] = useState(utils.randomNumber(9));
    const [guessList, setGuessList] = useState(numbers);
    const [gameOver, setGameOver] = useState(false)

    const reset = () => {
        setCorrectGuess(false);
        setGuess(null);
        setNumberOfGuesses(0)
        setTotalGuesses(0);
        setGameOver(false);
        setGuessList(numbers)
        setChallenge(utils.randomNumber(count))
        setPicked([])
    }

    const setLanguage = language => {
        setNumberNames(NumbersData[language]);
        reset();
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
                setChallenge(updatedGuessList[utils.randomNumber(updatedGuessList.length) - 1].key)
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
            <select onChange={e => setLanguage(e.target.value)}>
                {Object.keys(NumbersData).map(lang => <option key={lang}>{lang}</option>)}
            </select>
            <button className="reset" onClick={reset}>Reset Game</button>
            {gameOver ?
                <h5>{(count / totalGuesses * 100).toFixed(2)}%</h5> :
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

        </>
    )
}