import { useState } from 'react'


const App = () => {
  const [nums, setNums] = useState([]) 

  const array1 = [0,2,4,6,8]
  const array2 = [1,3,5,7,9]
  const mergedArray = [...array1, ...array2]

  const showArray = () => {
    const copy = []
    let random = Math.random()
    mergedArray.sort().forEach(num => copy.push(num * random))

    setNums(copy);

  };

  return (
    <div>
      <button onClick={showArray}>Click</button>
      <h1>Numbers!</h1>
      <ul>{nums.map(num => <li>{num}</li>)}</ul>
    </div>

  )
}

export default App
