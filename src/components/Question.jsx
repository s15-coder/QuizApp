import { useState } from "react"

import ProgressBar from "./ProgressBar"
import QUESTIONS from "../questions"
import Answers from "./Answers"

export default function Question({ index, skipHandler, selectHandler }) {

    const [selectedAnswer, setSelectedAnswer] = useState({
        text: null,
        isCorrect: null
    })
    function selectAnswer(answer) {
        selectHandler(answer)

        // if (selectedAnswer.text) return
        // setSelectedAnswer({
        //     text: answer,
        //     isCorrect: null,
        // })
        // setTimeout(() => {

        //     if (answer === QUESTIONS[index].answers[0]) {
        //         setSelectedAnswer({
        //             text: answer,
        //             isCorrect: true,
        //         })
        //     } else {
        //         setSelectedAnswer({
        //             text: answer,
        //             isCorrect: false,
        //         })
        //     }
        //     setTimeout(() => {
        //         selectHandler(answer)
        //     }, 1000)

        // }, 1000)
    }
    return <>
        <ProgressBar key={index} timeout={10000} onTimeOut={skipHandler} />
        <div id="questions">
            <h2>{QUESTIONS[index].text}</h2>
            <Answers
                key={index}
                answers={QUESTIONS[index].answers}
                selectedAnswer={selectedAnswer}
                selectAnswer={selectAnswer} />
        </div></>
}