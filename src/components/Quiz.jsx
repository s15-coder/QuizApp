import { useCallback, useState } from "react"
import QUESTIONS from "../questions"
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
    const [answers, setAnswers] = useState([])
    const currentActiveQuestion = answers.length;
    const isQuizCompleted = QUESTIONS.length === currentActiveQuestion
    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
        setAnswers(prevAnswers => {
            return [...prevAnswers, answer]
        })
    },)
    const handleSkipQuestion = useCallback(() => handleSelectAnswer(null), [])

    if (isQuizCompleted) {
        return <Summary answers={answers} />
    }

    return <div id="quiz">

        <Question
            key={currentActiveQuestion}
            index={currentActiveQuestion}
            skipHandler={handleSkipQuestion}
            selectHandler={handleSelectAnswer}
        />
    </div>
}