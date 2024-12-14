import { useEffect, useState } from "react"

export default function ProgressBar({ timeout, onTimeOut }) {
    const [remainingSeconds, setRemainingSeconds] = useState(timeout)
    // This effect is to get to know when the timeout is reached
    useEffect(() => {
        const timeoutId = setTimeout(onTimeOut, timeout)
        return () => clearTimeout(timeoutId)
    }, [timeout, onTimeOut])

    // This effect is to update the remaining seconds every 100ms
    useEffect(() => {
        // Every 100ms, decrement the remainingSeconds by 100 until it reaches 0
        const interval = setInterval(() => {
            setRemainingSeconds(prevRemainingSec => prevRemainingSec - 100)
        }, 100)
        return () => clearInterval(interval)

    }, [])

    return <progress id="question-time" max={timeout} value={remainingSeconds}></progress>
}