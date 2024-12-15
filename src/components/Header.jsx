import logoApp from '../assets/app-logo.png'
export default function Header() {
    return <header>
        <img src={logoApp} alt="The application logo" />
        <h1>Prove your knowledge!</h1>
    </header>
}