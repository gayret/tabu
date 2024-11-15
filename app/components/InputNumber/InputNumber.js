export default function InputNumber({ label, value, setValue }) {
  return (
    <div className='input-number-wrapper'>
      <label>{label}</label>
      <div className='input-number'>
        <button onClick={() => setValue(value - 1)}>-</button>
        <input disabled type='number' value={value} />
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>
    </div>
  )
}
