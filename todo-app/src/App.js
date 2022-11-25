import { useState } from 'react'


// Sử dụng bình thường

const CounterNomal = () => {
  const [counter, setCounter] = useState(0)
  const handlerIncrease = (isIncreate = true) => isIncreate ?  setCounter(counter + 1) : setCounter(counter - 1)
  return (
      <div className="Counter">
        <h1>{counter}</h1>
        <h2> {counter || ''}</h2>
        <button onClick={() => handlerIncrease(true)}> Increase</button>
        <button onClick={() => handlerIncrease(false)}> Decrease</button>
      </div>
  )
}

const TodoComponent = () => {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])
  const handlerList = () => {
    setJobs(pre => {
      setJob('')
      return  [...pre, job]
    })
  }
  return (
    <div >
        <input value={job} onChange = {e => setJob(e.target.value)}></input>
        <button onClick={handlerList}>ADD</button>
        <ul>
            {jobs.map((item, index) => (<li key = {index}> {item}</li>))}
        </ul>
    </div>
  );
}

function App() {
  return (
    <div className='app'>
      <TodoComponent />
      <CounterNomal />
    </div>
  )
}

export default App;
