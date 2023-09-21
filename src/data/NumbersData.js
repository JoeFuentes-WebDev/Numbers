

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
            <img alt="C" src='/notes/C.png' />,
            <img alt="D" src='/notes/D.png' />,
            <img alt="E" src='/notes/E.png' />,
            <img alt="F" src='/notes/F.png' />,
            <img alt="G" src='/notes/G.png' />,
            <img alt="A" src='/notes/A.png' />,
            <img alt="B" src='/notes/B.png' />,
            <img alt="high C" src='/notes/C-2.png' />,
            <img alt="high D" src='/notes/D-2.png' />,
            <img alt="high E" src='/notes/E-2.png' />,
            <img alt="high F" src='/notes/F-2.png' />,
            <img alt="high G" src='/notes/G-2.png' />
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
        notes: ["C", 'D', 'E', 'F', 'G', 'A', 'B ', 'C2', 'D2', 'E2', 'F2', 'G2']
    }
}

