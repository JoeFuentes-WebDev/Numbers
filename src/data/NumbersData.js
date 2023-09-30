

const numberAnswers = []
for (let i = 1; i <= 9; i++) numberAnswers.push(i)
export const NumbersData = {
    challenges: {
        english: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        spanish: ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'],
        italian: ['uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove'],
        french: ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'],
        german: ['eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun'],
        japanese: ['いち', 'に', 'さん', 'し、よん', 'ご', 'ろく', 'しち、なな', 'はち', 'きゅう、く'],
        chinese: ['一', '二', '三', '四', '五', '六', '七', '八', '九'],
        esperanto: ['unu', 'du', 'tri', 'kvar', 'kvin', 'ses', 'sep', 'ok', 'naŭ'],
        notes: [
            <img alt="C" src='/notes/C-1.png' />,
            <img alt="D" src='/notes/D-1.png' />,
            <img alt="E" src='/notes/E-1.png' />,
            <img alt="F" src='/notes/F-1.png' />,
            <img alt="G" src='/notes/G-1.png' />,
            <img alt="A" src='/notes/A-1.png' />,
            <img alt="B" src='/notes/B-1.png' />,
            <img alt="high C" src='/notes/C-2.png' />,
            <img alt="high D" src='/notes/D-2.png' />,
            <img alt="high E" src='/notes/E-2.png' />,
            <img alt="high F" src='/notes/F-2.png' />,
            <img alt="high G" src='/notes/G-2.png' />
        ],
        pianoG: [
            <img alt="B-0" src='/piano/B-0.png' />,
            <img alt="C-1" src='/piano/C-1.png' />,
            <img alt="D-1" src='/piano/D-1.png' />,
            <img alt="E-1" src='/piano/E-1.png' />,
            <img alt="F-1" src='/piano/F-1.png' />,
            <img alt="G-1" src='/piano/G-1.png' />,
            <img alt="A-1" src='/piano/A-1.png' />,
            <img alt="B-1" src='/piano/B-1.png' />,
            <img alt="C-2" src='/piano/C-2.png' />,
            <img alt="D-2" src='/piano/D-2.png' />,
            <img alt="E-2" src='/piano/E-2.png' />,
            <img alt="F-2" src='/piano/F-2.png' />,
            <img alt="G-2" src='/piano/G-2.png' />,
            <img alt="G-2" src='/piano/A-2.png' />
        ]
    },
    answers: {
        english: numberAnswers,
        spanish: numberAnswers,
        italian: numberAnswers,
        french: numberAnswers,
        german: numberAnswers,
        japanese: numberAnswers,
        chinese: numberAnswers,
        esperanto: numberAnswers,
        notes: ["C", 'D', 'E', 'F', 'G', 'A', 'B', 'C2', 'D2', 'E2', 'F2', 'G2'],
        pianoG: [
            <img id='1' alt="B" src='/notes/B-0.png' />,
            <img id='2' alt="C" src='/notes/C-1.png' />,
            <img id='3' alt="D" src='/notes/D-1.png' />,
            <img id='4' alt="E" src='/notes/E-1.png' />,
            <img id='5' alt="F" src='/notes/F-1.png' />,
            <img id='6' alt="G" src='/notes/G-1.png' />,
            <img id='7' alt="A" src='/notes/A-1.png' />,
            <img id='8' alt="B" src='/notes/B-1.png' />,
            <img id='9' alt="high C" src='/notes/C-2.png' />,
            <img id='10' alt="high D" src='/notes/D-2.png' />,
            <img id='11' alt="high E" src='/notes/E-2.png' />,
            <img id='12' alt="high F" src='/notes/F-2.png' />,
            <img id='13' alt="high G" src='/notes/G-2.png' />,
            <img id='14' alt="high A" src='/notes/A-2.png' />
        ]
    }
}

