import "./App.css";
import Message from "./Components/Message/Message";
import CommentsList from "./Components/task2/CommentsList";

function App() {
  return (
    <div className="App">
      <Message text="Привет, мир!" />
      <CommentsList />
    </div>
  );
}

export default App;
