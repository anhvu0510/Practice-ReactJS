import ToDoList from './components/ToDoList'
import ToDoListReducer from './components/ToDoListReducer'
import { StoreContext, useStore } from './store'
// Sử dụng bình thường
function App() {
  const [state, dispatch] = useStore(StoreContext)
  return (
    <div className='App'>
      <ToDoListReducer />
    </div>
  )
}

export default App;
