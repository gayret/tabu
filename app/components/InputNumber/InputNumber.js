export default function InputNumber({ label, value, setValue }) {
  const onChangeValue = (type) => {
    if (value === 0 && type === '-') return
    setValue((prevValue) => (type === '+' ? prevValue + 1 : prevValue - 1))
  }

  return (
    <div className='input-number-wrapper'>
      <label>{label}</label>
      <div className='input-number'>
        <button onClick={() => onChangeValue('-')}>-</button>
        <input disabled type='number' value={value} />
        <button onClick={() => onChangeValue('+')}>+</button>
      </div>
    </div>
  )
}
