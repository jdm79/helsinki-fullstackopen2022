import { useState } from 'react'

const App = () => {
  const [goodValue, setGoodValue] = useState(0)
  const [badValue, setBadValue] = useState(0)
  const [neutralValue, setNeutralValue] = useState(0)
  
  const setGood = () => {    
    setGoodValue(goodValue + 1)  
  }  
  
  const setBad = () => {    
    setBadValue(badValue + 1)  
  }  
  
  const setNeutral = () => {    
    setNeutralValue(neutralValue + 1)  
  }  

  const resetValues = () => {    
    setGoodValue(0)  
    setBadValue(0)  
    setNeutralValue(0)  
  }  
    
  

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={setGood}>Good</button>      
      <button onClick={setBad}>Bad</button>
      <button onClick={setNeutral}>Neutral</button>     

      <h2>Statistics</h2>
      <p>Good {goodValue}</p>
      <p>Bad {badValue}</p>
      <p>Neutral {neutralValue}</p>
      <button onClick={resetValues}>Reset</button>     

    </div>
  )
}

export default App