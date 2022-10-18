import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.name}</button>      
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

function Statistics(props) {
  let statistics;
  let all = props.good + props.neutral + props.bad;
  let avg = (props.good - props.bad) / all;
  let pos = (props.good / all) * 100;
  if (all > 0) {
    statistics = (
      <div className="results">
        <table>
          <tbody>
            <Statistic text="good" value={props.good} />
            <Statistic text="neutral" value={props.neutral} />
            <Statistic text="bad" value={props.bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={avg} />
            <Statistic text="positive" value={pos + " %"} />
          </tbody>
        </table>
      </div>
    );
  } else {
    statistics = (
      <div className="results">
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div className="statistics">
      <h1>statistics</h1>
      {statistics}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [total, setTotal] = useState(0)

  
  const setGoodValue = () => {    
    setGood(good + 1)
    setTotalValue()
  }  
  
  const setBadValue = () => {    
    setBad(bad + 1)
    setTotalValue()
  }  
  
  const setNeutralValue = () => {    
    setNeutral(neutral + 1)
    setTotalValue()
  }  

  const resetValues = () => {    
    setGood(0)  
    setBad(0)  
    setNeutral(0)
    setTotal(0)
  }

  const setTotalValue = () => {
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={setGoodValue} name="Good"/>
      <Button onClick={setBadValue} name="Bad"/>
      <Button onClick={setNeutralValue} name="Neutral"/>
      <Statistics good={good} bad={bad} neutral={neutral} />
      <Button onClick={resetValues} name="Reset"/>     
    </div>
  )
}

export default App