import "./App.css";
import Message from "./Components/Message/Message";
import CommentsList from "./Components/task2/CommentsList";
import TemperatureConverter from "./Components/task3/TemperatureConverter";
import TodoList from "./Components/task3/TodoList ";

function App() {
  return (
    <div className="App">
      <Message text="Привет, мир!" />
      <CommentsList />
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
