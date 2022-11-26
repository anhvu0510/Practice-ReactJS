import { useState } from 'react'


import ToDoList from './components/ToDoList'


const list = [
  {
    id: 1,
    job: 'Làm việc nhà'
  },
  {
    id: 2,
    job: 'Làm việc nhà'
  },
  {
    id: 3,
    job: 'Làm việc nhà'
  },
  {
    id: 4,
    job: 'Làm việc nhà'
  }
]
// Sử dụng bình thường
function App() {
  return (
    <div className='App'>
      <ToDoList title='Danh sách việc phải làm' listJob={list}/>
    </div>
  )
}

export default App;
