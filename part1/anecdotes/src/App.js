import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onclick}>{props.title}</button>
  )
}

const App = () => {
  const [nums, setNums] = useState([])

  const array1 = [2,4,6,8]
  const array2 = [1,3,5,7,9]
  const mergedArray = [...array1, ...array2]

  const showArray = () => {
    const copy = []
    let random = Math.random()
    mergedArray.sort().forEach(num => copy.push(num * random))
    setNums(copy);
  }

  let total = nums.reduce((partialSum, a) => partialSum + a, 0)

  return (
    <div className='container'>
      <Button onclick={showArray} title="Click here!"/>
      <h1>Numbers!</h1>
      { nums.length > 0
      ?
      <div>
        <ul>{nums.map((num, i) => <li key={i}>{num}</li>)}</ul>
        <h3>Total: {total}</h3>
      </div>
        
      : 
        <h1>Press click to make those integers floats!</h1>
      }
    </div>
  )
}


export default App
