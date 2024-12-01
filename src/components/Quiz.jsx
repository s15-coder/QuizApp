import { useState } from "react"
import QuizCompletedImg from "../assets/quiz-complete.png"
import QUESTIONS from "../questions"
import ProgressBar from "./ProgressBar";

export default function Quiz(){
    const [answers, setAnswers] = useState([])
    const currentActiveQuestion = answers.length;
    const isQuizCompleted = QUESTIONS.length === currentActiveQuestion
    function handleSelectAnswer(answer){
        setAnswers(prevAnswers=>{
            return [...prevAnswers,answer]
        })
    }
    if(isQuizCompleted){
        return <div id="summary">
            <img src={QuizCompletedImg} alt="Quiz completed image" />
            <h2>Quiz Completed</h2>
        </div>
    }


    const shuffledAnswers = [...QUESTIONS[currentActiveQuestion].answers]
    shuffledAnswers.sort(()=>Math.random() - 0.5)
    
    return <div id="quiz">
    <ProgressBar timeout={10000} onTimeOut={()=>handleSelectAnswer(null)}/>
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