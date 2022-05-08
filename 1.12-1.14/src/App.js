import { useState } from 'react'

const Button = ({ handelClick, text }) => (
  <>
    <button onClick={handelClick}>
      {text}
    </button>
  </>
)

const Display = (props) => (
  <div>
    {props.text} {props.value} votes
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allClicks, setAll] = useState([])
  const length = anecdotes.length
  const points = Array.apply(null, new Array(length)).map(Number.prototype.valueOf,0);
  const [array, setArray] = useState([ ...points ])
  const [vote, setVote] = useState(array[selected])
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if(allClicks.length < (length - 1))
    {
      setSelected(selected + 1)
      setAll(allClicks.concat('1'))
      setVote(array[selected + 1])
    } else
    {
      setSelected(0)
      setAll([])
      setVote(array[0])
    }
  }

  const votehandleClick = () => {
    setTimeout(() => {
      let i = array.indexOf(Math.max(...array));
      setCount(i);
    }, 1);
    if(allClicks.length === (length - length))
    {
      array[selected] += 1
      setVote(array[selected])
    } else if (allClicks.length < (length))
    {
      array[allClicks.length] += 1
      setVote(array[allClicks.length])
    }
  }


  return (
    <div>
      {anecdotes[selected]}
      <Display text="has" value={vote} />
      <Button handelClick={votehandleClick} text="Vote" />
      <Button handelClick={handleClick} text="Next Anecdote" />

      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[count]}</div>
    </div>
  )
}

export default App