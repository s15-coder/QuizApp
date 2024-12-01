import logoApp from '../assets/quiz-logo.png'
export default function Header(){
    return <header>
    <img src={logoApp} alt="The application logo" />
    <h1>REACTQUIZ</h1>
    </header>
}