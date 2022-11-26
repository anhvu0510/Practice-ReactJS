import { ToDoList } from "./components/ToDoList";
import { StoreContext, useStore } from "./store";
// Sử dụng bình thường
function App() {
  // const [state, dispatch] = useStore(StoreContext)
  return (
    <div className="App">
      <h1>Todo APP</h1>
      <ToDoList type="TODO" title="Việc cần làm" />
      <ToDoList type="DONE" title="Việc đã hoàn thành" />
    </div>
  );
}

export default App;
