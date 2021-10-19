
import { useState ,useEffect} from 'react';
import './App.css';
import About from './component/About';
import AdddTodo from './component/AdddTodo';
import Footer from './component/Footer';
import Header from './component/Header';
import Todos from './component/Todos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos")==="null")
  {
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));

  }
  const onDelete=(todo)=>{
   console.log("i am on delete",todo);
   setTodos(todos.filter((e)=>{
    return e!==todo;
   }))
   localStorage.setItem("todos", JSON.stringify(todos));
  }
 
  const addTodo=(title,desc)=>{
    console.log("i am adding todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{
     sno=todos[todos.length-1].sno + 1;
    }
    let myTodo = {
     sno:sno,
     title:title,
     desc:desc,
    }
     setTodos([...todos,myTodo]);
     console.log(myTodo);
    
  }
 
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <Router>
    <div>
    <Header title="My Todo List" about="About" searchBar={true}/>
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <AdddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
          </Route>
          </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
