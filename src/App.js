import "./App.css";
import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <TaskForm/>
      <TasksList/>
    </div>
  );
}

export default App;
