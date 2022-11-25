import { useState } from 'react'


function App() {

  const [counter, setCounter] = useState(1)
  const handlerIncrease = (isIncreate = true) => isIncreate ?  setCounter(counter + 1) : setCounter(counter - 1)

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => handlerIncrease(true)}> Increase</button>
      <button onClick={() => handlerIncrease(false)}> Decrease</button>

    </div>
  );
}

export default App;
