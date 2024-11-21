'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import InputNumber from '../components/InputNumber/InputNumber'
import { useRouter } from 'next/navigation'

export default function Settings() {
  const [count, setCount] = useState(60)
  const [passable, setPassable] = useState(5)
  const [highlightSubmitButton, setHighlightSubmitButton] = useState(false)
  const router = useRouter()

  const setDefaults = () => {
    if (Number(localStorage.getItem('count'))) setCount(Number(localStorage.getItem('count')))
    if (Number(localStorage.getItem('passable')))
      setPassable(Number(localStorage.getItem('passable')))
  }

  const onChangeCount = (type) => {
    setHighlightSubmitButton(true)
    if (count === 0 && type === '-') return
    if (type === '-') setCount(count - 10)
    if (type === '+') setCount(count + 10)
  }

  const onChangePassable = (type) => {
    setHighlightSubmitButton(true)
    if (passable === 0 && type === '-') return
    if (type === '-') setPassable(passable - 1)
    if (type === '+') setPassable(passable + 1)
  }

  const onSubmit = () => {
    setHighlightSubmitButton(false)
    localStorage.setItem('count', count)
    localStorage.setItem('passable', passable)

    router.push('/')
  }

  useEffect(() => {
    setDefaults()
  }, [])
  return (
    <div>
      <h1>Ayarlar</h1>
      <div className='settings-fields'>
        <div className='settings-field'>
          <InputNumber
            label='Çift başına tanınacak süre (sn)'
            value={count}
            action={onChangeCount}
          />
        </div>
        <div className='settings-field'>
          <InputNumber label='Toplam pas hakkı' value={passable} action={onChangePassable} />
        </div>
        <div className='settings-field'>
          <button className={highlightSubmitButton ? 'btn-start' : ''} onClick={onSubmit}>Kaydet</button>
        </div>
        <div className='settings-field position-bottom'>
          <Link className='btn-start' href='/'>
            Oyuna dön
          </Link>
        </div>
      </div>
    </div>
  )
}
