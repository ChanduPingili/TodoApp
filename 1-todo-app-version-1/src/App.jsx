import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return <center className="center">
    <Appname/>
    <div className="todo-container">
    <AddTodo/>
    <TodoItem1/>
    <TodoItem2/>
    </div>
  </center>
}

export default App
