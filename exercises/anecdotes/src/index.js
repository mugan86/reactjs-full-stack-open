import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })

  const handleSelectAnecdote = () => {
    setSelected(getRandomInt(0, anecdotes.length - 1))
  }
  const addVoteInSelectAnecdote = () => {
    const copy = { ...votes }
    // increment the property 2 value by one
    copy[selected] += 1
    setVotes(copy);
  }
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Tiene {votes[selected]} votos.</p>
      <Button onClick={handleSelectAnecdote} text="Select Next Anecdote"/>
      <Button onClick={addVoteInSelectAnecdote} text="Add Vote in Anecdote"/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)