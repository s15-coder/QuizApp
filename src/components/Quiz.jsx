import { useState } from "react"
import QUESTIONS from "../questions"
export default function Quiz(){
    const [answers, setAnswers] = useState([])
    const currentActiveQuestion = answers.length;

    function handleSelectAnswer(answer){
        setAnswers(prevAnswers=>{
            return [...prevAnswers,answer]
        })
    }
    return <div id="quiz">
    <div id="questions">
        <h2>{QUESTIONS[currentActiveQuestion].text}</h2>
        <ul id="answers">
            {QUESTIONS[currentActiveQuestion].answers.map((answer)=>{
                return <li key={answer} className="answer">
                    <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>
                </li>
            })}
        </ul>
    </div>
    </div>
}