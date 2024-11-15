'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Settings() {
  const [count, setCount] = useState(60)
  const [passable, setPassable] = useState(5)

  const setDefaults = () => {
    if (Number(localStorage.getItem('count'))) setCount(Number(localStorage.getItem('count')))
    if (Number(localStorage.getItem('passable')))
      setPassable(Number(localStorage.getItem('passable')))
  }

  const onSubmit = () => {
    localStorage.setItem('count', count)
    localStorage.setItem('passable', passable)
  }

  useEffect(() => {
    setDefaults()
  }, [])
  return (
    <div>
      <h1>Ayarlar</h1>
      <div className='settings-fields'>
        <div className='settings-field'>
          <label>Kart başına tanınacak süre</label>
          <input
            type='number'
            defaultValue={count}
            min={0}
            max={120}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
        <div className='settings-field'>
          <label>Toplam pas hakkı</label>
          <input
            type='number'
            defaultValue={passable}
            min={0}
            max={10}
            onChange={(e) => setPassable(e.target.value)}
          />
        </div>
        <div className='settings-field'>
          <button onClick={onSubmit}>Kaydet</button>
        </div>
        <div className='settings-field'>
          <button>
            <Link href='/'>Oyuna dön</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
