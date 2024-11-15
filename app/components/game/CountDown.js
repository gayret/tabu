'use client'
import { useEffect, useState } from 'react'

export default function CountDown({ count, setCount, isPlaying }) {
  const [countdown, setCountdown] = useState(count)

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown <= 0) {
        clearInterval(interval)
      } else if (isPlaying) {
        setCountdown((prevCountdown) => prevCountdown - 1)
        setCount((prevCount) => prevCount - 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  })
  return (
    <span key={countdown} className='countdown'>
      {countdown}
    </span>
  )
}
