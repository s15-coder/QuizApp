import { useRef } from 'react'
export default function Answers({ answers, selectedAnswer, selectAnswer }) {

    const shuffledAnswers = useRef()
    if (!shuffledAnswers.current) {
        console.log('Shuffled');
        shuffledAnswers.current = [...answers]
        shuffledAnswers.current.sort(() => Math.random() - 0.5)
    }

    return <ul id="answers">
        {shuffledAnswers.current.map((answer,) => {

            let buttonClass = ''

            if (selectedAnswer.text === answer) {
                buttonClass = 'selected'

            }
            if (selectedAnswer.text === answer && selectedAnswer.isCorrect != null) {
                buttonClass = selectedAnswer.isCorrect ? 'correct' : 'wrong'
            }

            return <li key={answer} className="answer">
                <button
                    className={buttonClass}
                    onClick={() => selectAnswer(answer)}
                >{answer}</button>
            </li>
        })}
    </ul>
}