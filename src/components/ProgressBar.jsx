import { useEffect, useState } from "react"

export default function ProgressBar({ timeout, onTimeOut }) {
    const [remainingSeconds, setRemainingSeconds] = useState(timeout)
    useEffect(() => {
      const timeoutId =  setTimeout(onTimeOut, timeout)
      return ()=>{
        clearTimeout(timeoutId)
      }
    }, [timeout])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingSeconds(prevRemainingSec => {
                return prevRemainingSec - 100
            })
            return ()=>{
                clearInterval(interval)
            }
        }, 100)
    }, [])

    return <progress id="question-time" max={timeout} value={remainingSeconds}></progress>
}