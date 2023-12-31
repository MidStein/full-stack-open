import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  const showNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const voteCurr = () => {
    const arr = [...points];
    arr[selected] = arr[selected] + 1;
    setPoints(arr);

    if (arr[selected] > arr[mostVoted]) {
      setMostVoted(selected);
    }
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>
        {anecdotes[selected]}
      </div>
      <button onClick={showNextAnecdote}>next anecdote</button>
      <button onClick={voteCurr}>vote</button>

      <h2>Anecdote with most votes</h2>
      <div>
        {anecdotes[mostVoted]}
      </div>
    </>
  )
}

export default App
