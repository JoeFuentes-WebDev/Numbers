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
    const [lang, setLang] = useState('english')

    const numbers = [];
    for (let i = 1; i <= NumbersData.challenges[lang].length; i++) {
        numbers.push({ key: i, value: NumbersData.answers[lang][i - 1] })
    }
    const [tiles, setTiles] = useState(numbers);
    const [guessList, setGuessList] = useState([...numbers]);
    const [numberNames, setNumberNames] = useState(NumbersData.challenges[lang])

    const [challenge, setChallenge] = useState(utils.randomNumber(NumbersData.challenges[lang].length));
    const [gameOver, setGameOver] = useState(false)

    const reset = () => {
        setCorrectGuess(false);
        setGuess(null);
        setNumberOfGuesses(0)
        setTotalGuesses(0);
        setGameOver(false);
        setPicked([]);
    }

    const newgame = () => {

        const numbers = [];
        for (let i = 1; i <= NumbersData.challenges[lang].length; i++) {
            numbers.push({ key: i, value: NumbersData.answers[lang][i - 1] })
        }
        setGuessList([...numbers]);
        setChallenge(utils.randomNumber(NumbersData.challenges[lang].length));
        reset()
    }

    const setLanguage = language => {
        setLang(language)
        const numbers = [];
        for (let i = 1; i <= NumbersData.challenges[language].length; i++) {
            numbers.push({ key: i, value: NumbersData.answers[language][i - 1] })
        }
        setGuessList([...numbers]);
        setNumberNames(NumbersData.challenges[language]);
        setTiles([...numbers]);
        reset()
    }

    const getNumber = e => {
        const correct = parseInt(e.target.id) === challenge
        setCorrectGuess(correct);
        if (correct) {
            setPicked([...picked, challenge]);
            setNumberOfGuesses(0);
            const updatedGuessList = [...guessList.filter(g => g.key !== challenge)];
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
            <h1>{lang}</h1>
            <select onChange={e => setLanguage(e.target.value)}>
                {Object.keys(NumbersData.answers).map(lang => <option key={lang}>{lang}</option>)}
            </select>
            <button className="reset" onClick={newgame}>Reset Game</button>
            {gameOver ?
                <h5>{(numberNames.length / totalGuesses * 100).toFixed(2)}%</h5> :
                <p>{numberNames[challenge - 1]}</p>
            }

            {tiles.length > 0 && <div className="tiles">
                {tiles.map(n => <button onClick={e => getNumber(e)} id={n.key} key={n.key}
                    disabled={picked.includes(n.key)}
                    className={[
                        gameOver ? "game-over" :
                            correctGuess && guess === n.key ? "right" :
                                !correctGuess && guess === n.key ? "wrong" :
                                    numberOfGuesses > 3 && challenge === n.key ? " hint" :
                                        "", picked.includes(n.key) ? " picked" : ""].join(' ')}>
                    {n.value}
                </button>
                )}
            </div>}
        </>
    )
}