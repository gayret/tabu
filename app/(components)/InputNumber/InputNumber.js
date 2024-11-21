export default function InputNumber({ label, value, action }) {
  const onChangeValue = (type) => action(type)

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
