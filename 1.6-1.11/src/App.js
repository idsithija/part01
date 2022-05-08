import { useState } from 'react'

const Button = ({setValueGood, text }) => {
  return (
    <button onClick={setValueGood}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <div>{props.text} {props.value}</div>
    </>
  )
}

const Statistics = (props) => {

  const totalCount = props.good + props.neutral + props.bad;
  const avarageCount = (props.good - props.bad) / (totalCount);
  const positiveCount = (props.good) / (totalCount) + '%';
  
  if (props.allClicks.length === 0) {
    return (
      <div>
        No Feedback Given
      </div>
    )
  }

  return (
    <>
    <table>
      <tr>
        <td>
          <StatisticLine text="Good" value={props.good} />
        </td>
      </tr>
      <tr>
        <td>
          <StatisticLine text="Neutral" value={props.neutral} />
        </td>
      </tr>
      <tr>
        <td>
          <StatisticLine text="Bad" value={props.bad} />
        </td>
      </tr>
      <tr>
        <td>
          <StatisticLine text="All" value={totalCount} />
        </td>
      </tr>
      <tr>
        <td>
          <StatisticLine text="Avarage" value={avarageCount} />
        </td>
      </tr>
      <tr>
        <td>
          <StatisticLine text="Positive" value={positiveCount} />
        </td>
      </tr>
    </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const setValueGood = () => {
    setGood(good + 1)
    setAll(allClicks.concat(setGood))
  }

  const setValueNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat(setNeutral))
  }

  const setValueBad = () => {
    setBad(bad + 1)
    setAll(allClicks.concat(setBad))
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button setValueGood={setValueGood} text="Good" />
      <Button setValueGood={setValueNeutral} text="Neutral" />
      <Button setValueGood={setValueBad} text="Bad" />

      <h1>
        Statistics
      </h1>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}

export default App