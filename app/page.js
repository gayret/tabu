'use client'

import { useEffect, useState } from 'react'
import words from './data/words.json'
import Card from './components/game/Card'
import CountDown from './components/game/CountDown'
import Actions from './components/game/Actions'
import Link from 'next/link'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [wordCount, setWordCount] = useState(0)
  const [points, setPoints] = useState(0)
  const [passable, setPassable] = useState(5)
  const [count, setCount] = useState(60)

  const setRandomWord = () => {
    setActiveIndex(Math.floor(Math.random() * words.length))
    setCount(Number(localStorage.getItem('count')) || 60)
    setWordCount((prevWordCount) => prevWordCount + 1)
  }

  const setPositivePoints = () => {
    setPoints((prevPoints) => prevPoints + 10)
    setRandomWord()
  }

  const setNegativePoints = () => {
    setPoints((prevPoints) => prevPoints - 5)
    setRandomWord()
  }

  const onPass = () => {
    setPassable((prevPassable) => prevPassable - 1)
    setRandomWord()
  }

  const setDefaults = () => {
    if (Number(localStorage.getItem('count'))) setCount(Number(localStorage.getItem('count')))
    if (Number(localStorage.getItem('passable')))
      setPassable(Number(localStorage.getItem('passable')))
  }

  useEffect(() => {
    setDefaults()
    setRandomWord()
  }, [])

  return (
    <>
      <div className='score'>
        <div className='word-count'>Kaçıncı kelime: {wordCount} </div>
        <div className='points'>Puan: {points}</div>
      </div>
      <div key={count}>
        <CountDown count={count} setCount={setCount} />
      </div>
      <div className='cards'>
        {words.map(
          (word, wordIndex) => wordIndex === activeIndex && <Card key={word.id} word={word} />
        )}
      </div>
      <button className='btn-settings'>
        <a href='/settings'>Ayarlar</a>
      </button>

      <Actions
        passable={passable}
        setPassed={onPass}
        setPositivePoints={setPositivePoints}
        setNegativePoints={setNegativePoints}
      />
    </>
  )
}
