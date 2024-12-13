'use client'

import { useEffect, useState } from 'react'
import allWords from './data/words.json'
import Card from './components/game/Card'
import CountDown from './components/game/CountDown/CountDown'
import Actions from './components/game/Actions'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [words, setWords] = useState(allWords)
  const [activeIndex, setActiveIndex] = useState(null)
  const [wordCount, setWordCount] = useState(0)
  const [points, setPoints] = useState(0)
  const [passable, setPassable] = useState(5)
  const [count, setCount] = useState(60)
  const [isCardsFinished, setIsCardsFinished] = useState(false)

  const setRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length + 1)
    const oldUsedWordsIndexs = JSON.parse(localStorage.getItem('usedWordsIndexs')) || []

    if (words.length == oldUsedWordsIndexs.length) {
      setIsCardsFinished(true)
      return
    }

    if (oldUsedWordsIndexs.includes(randomIndex)) {
      setRandomWord()
      return
    }

    setActiveIndex(randomIndex)

    localStorage.setItem('usedWordsIndexs', JSON.stringify([...oldUsedWordsIndexs, randomIndex]))

    setWords((prevWords) => prevWords.filter((_, index) => index !== activeIndex))
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

  const onPushSettings = () => {
    if (confirm('Ayarlar sayfasına giderken puanınız sıfırlanacak. Onaylıyor musunuz?')) {
      router.push('/settings')
    }
  }

  const onStart = () => {
    setDefaults()
    setIsCardsFinished(false)
    setWords(allWords)
    setPoints(0)
    setWordCount(0)
    setRandomWord()
  }

  const onStartAgain = () => {
    setCount(localStorage.getItem('count') || 60)
    onStart()
  }

  const onClearLocalStorageAndStartAgain = () => {
    localStorage.clear()
    onStartAgain()
  }

  useEffect(() => {
    setDefaults()
  }, [])

  return (
    <div className='game'>
      <div className='score'>
        <div className='word-count'>{wordCount}. kelime</div>
        <div className='points'>{points} puan</div>
      </div>
      {activeIndex && !isCardsFinished && (
        <div key={count} style={{ textAlign: 'center' }}>
          <CountDown isPlaying={!!activeIndex} count={count} setCount={setCount} />
        </div>
      )}
      <div className='cards'>
        {activeIndex &&
          !isCardsFinished &&
          words.map(
            (word, wordIndex) => wordIndex === activeIndex && <Card key={wordIndex} word={word} />
          )}

        {!activeIndex && !isCardsFinished && (
          <div className='start'>
            <h2 className='title'>Hazır mısınız?</h2>
            <button onClick={onStart}>Oyunu başlat</button>
          </div>
        )}

        {isCardsFinished && (
          <div className='start'>
            <h2 className='title'>Oha tüm kartları gördünüz.</h2>
            <button onClick={onClearLocalStorageAndStartAgain}>Yeniden Oyna</button>
          </div>
        )}
      </div>

      <button className='btn-settings' onClick={onPushSettings}>
        Ayarlar
      </button>

      {activeIndex && !isCardsFinished && count !== 0 && (
        <Actions
          passable={passable}
          setPassed={onPass}
          setPositivePoints={setPositivePoints}
          setNegativePoints={setNegativePoints}
        />
      )}

      {count === 0 && (
        <div className='start'>
          <button onClick={() => confirm('Oyunu yeniden baslatmak istiyor musunuz?') && onStart()}>
            Yeniden Oyna
          </button>
        </div>
      )}
    </div>
  )
}
