import { lazy, Suspense, useCallback, useState } from "react"
import QUESTIONS from "../questions"
import Question from "./Question";

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
        const Summary = lazy(() => import('./Summary'))
        return <Suspense><Summary answers={answers} /></Suspense>
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