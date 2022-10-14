import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [total, setTotal ] = useState(0)

  
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
      <button onClick={setGoodValue}>Good</button>      
      <button onClick={setBadValue}>Bad</button>
      <button onClick={setNeutralValue}>Neutral</button>     

      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Bad {bad}</p>
      <p>Neutral {neutral}</p>
      <p>Total {total}</p>
      <button onClick={resetValues}>Reset</button>     

    </div>
  )
}

export default App