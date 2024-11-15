'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import InputNumber from '../components/InputNumber/InputNumber'

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
          <InputNumber label='Kart başına tanınacak süre (sn)' value={count} setValue={setCount} />
        </div>
        <div className='settings-field'>
          <InputNumber label='Toplam pas hakkı' value={passable} setValue={setPassable} />
        </div>
        <div className='settings-field'>
          <button onClick={onSubmit}>Kaydet</button>
        </div>
        <div className='settings-field'>
          <button className='btn-start'>
            <Link href='/'>Oyuna dön</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
