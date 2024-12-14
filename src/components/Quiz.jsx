import { useCallback, useState } from "react"
import QuizCompletedImg from "../assets/quiz-complete.png"
import QUESTIONS from "../questions"
import ProgressBar from "./ProgressBar";

export default function Quiz(){
    const [answers, setAnswers] = useState([])

    const currentActiveQuestion = answers.length;
    // Check if the quiz is completed
    const isQuizCompleted = QUESTIONS.length === currentActiveQuestion
    function handleSelectAnswer(answer){
        setAnswers(prevAnswers=>{
            return [...prevAnswers,answer]
        })
    }
    // There are multiple way to add comments in JavaScript
    // This is a single line comment
    /** 
     * This is a multi-line comment
     * It can span multiple lines
     */ const handleSkipQuestion = useCallback(()=>handleSelectAnswer(null), [])

    if(isQuizCompleted){
        return <div id="summary">
            <img src={QuizCompletedImg} alt="Quiz completed image" />
            <h2>Quiz Completed</h2>
        </div>
    }


    const shuffledAnswers = [...QUESTIONS[currentActiveQuestion].answers]
    shuffledAnswers.sort(()=>Math.random() - 0.5)
    
    return <div id="quiz">
    {/* This key prop is used to force the ProgressBar component to re-render */}
    <ProgressBar key={currentActiveQuestion} timeout={10000} onTimeOut={handleSkipQuestion}  />
    <div id="questions">
        <h2>{QUESTIONS[currentActiveQuestion].text}</h2>
        <ul id="answers">
            {shuffledAnswers.map((answer)=>{
                return <li key={answer} className="answer">
                    <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>
                </li>
            })}
        </ul>
    </div>
    </div>
}