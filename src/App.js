import { Link, Route, Router, Routes } from "react-router";
import "./App.css";
import Message from "./Components/Message/Message";
import CommentsList from "./Components/task2/CommentsList";
import TemperatureConverter from "./Components/task3/TemperatureConverter";
import TodoList from "./Components/task3/TodoList ";
import HomePage from "./Components/task4/HomePage";
import AboutPage from "./Components/task4/AboutPage";

function App() {
  return (
    <div className="App">
      <Message text="Привет, мир!" />
      <CommentsList />
      <TemperatureConverter />
      <TodoList />
        <nav>
          <Link to="/">Главная</Link> | <Link to="/about">О нас</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
    </div>
  );
}

export default App;
