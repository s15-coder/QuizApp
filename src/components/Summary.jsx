import QuizCompletedImg from "../assets/quiz-complete.png"
import QUESTIONS from "../questions"
export default function Summary({ answers }) {
    let correctAnswers = 0
    let skippedAnswers = 0
    let incorrectAnswers = 0
    answers.forEach((answer, index) => {

        if (answer === null) {
            skippedAnswers++
            return;
        }
        if (answer === QUESTIONS[index].answers[0]) {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
    })
    const answeredCorrectly = (correctAnswers / QUESTIONS.length) * 100
    const answeredIncorrectly = (incorrectAnswers / QUESTIONS.length) * 100
    const skipped = (skippedAnswers / QUESTIONS.length) * 100


    return <div id="summary">
        <img src={QuizCompletedImg} alt="Quiz completed image" />
        <h2>Quiz Completed</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{`${skipped.toFixed(0)}%`}</span>
                <span className="text">Skipped</span>
            </p>
            <p>
                <span className="number">{`${answeredCorrectly.toFixed(0)}%`}</span>
                <span className="text">Correct Answers</span>
            </p>
            <p>
                <span className="number">{`${answeredIncorrectly.toFixed(0)}%`}</span>
                <span className="text">Incorrect Answers</span>
            </p>


        </div>
        <ol>
            {answers.map((answer, index) => {
                let cssClass = 'user-answer';

                if (answer === null) {
                    cssClass += ' skipped';
                } else if (answer === QUESTIONS[index].answers[0]) {
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong';
                }
                return <li key={index}>
                    <h3>{index + 1}</h3>
                    <p className="question">{QUESTIONS[index].text}</p>
                    <p className={cssClass}>{answer ?? 'Skipped'}</p>
                </li>
            })}
            {/* <li key={index}>
                <h3>{index + 1}</h3>
                <p className="question">{QUESTIONS[index].text}</p>
                <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li> */}
        </ol>
    </div>
}