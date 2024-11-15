export default function Card({ word }) {
  return (
    <div className='card'>
      <h2 className='title'>{word.title}</h2>
      <ul>
        {word.forbiddens.map((forbidden) => (
          <li className='forbidden' key={forbidden}>
            {forbidden}
          </li>
        ))}
      </ul>
    </div>
  )
}
