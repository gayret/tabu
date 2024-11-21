export default function Actions({ passable, setPassed, setPositivePoints, setNegativePoints }) {
  return (
    <div className='actions'>
      <button className='no' onClick={setNegativePoints}>
        Bilemedik
      </button>
      <button className='pass' disabled={!passable} onClick={setPassed}>
        Pas ({passable})
      </button>
      <button className='yes' onClick={setPositivePoints}>
        Bildik
      </button>
    </div>
  )
}
