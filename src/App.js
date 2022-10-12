
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <nav>
        <Link to='/' >Home</Link>
        <Link to='/todo' >Todo</Link>
        <Link to='/about' >About us</Link>
      </nav>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/todo"  element={ <TodoList/>}/>
        <Route path="/about"  element={<About/>}/>
      </Routes>  
    </>
  );
}

export default App;
