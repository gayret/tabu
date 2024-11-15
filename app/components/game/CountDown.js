'use client'
import { useEffect, useState } from 'react'

export default function CountDown({ count, setCount }) {
  const [countdown, setCountdown] = useState(count)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('countdown', countdown)
      if (countdown <= 0) {
        clearInterval(interval)
      } else {
        setCountdown((prevCountdown) => prevCountdown - 1)
        setCount((prevCount) => prevCount - 1)
      }
    }, 1000)
    return () => clearInterval(interval)
  })
  return (
    <div key={countdown} className='countdown'>
      {countdown}
    </div>
  )
}
