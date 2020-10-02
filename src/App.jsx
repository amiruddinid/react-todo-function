import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './component/Header/Header';
import Todo from './component/Todo';
import Home from './pages/Home';
import About from './pages/About/About';
import Detail from './pages/Detail';
import Login from './pages/Login';
import './App.css';

export default function App() {
  const [todo, setTodo] = useState([])
  const [filteredTodo, setFilteredTodo] = useState([])
  const [image] = useState('/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg')
  
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('todos'))){
      setTodo(JSON.parse(localStorage.getItem('todos')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo])

  const add = (value) => {
    // setState({
    //   todo:[...this.state.todo, {text:value}]
    // })
    setTodo([
      ...todo,
      {
        text: value,
        completed: false,
        date:new Date(),
        edit:false
      }
    ])
  }

  const remove = (i) => {
    let newTodo = [...todo];
    newTodo.splice(i, 1);
    setTodo(newTodo)
    // localStorage setItem
  }

  const handleEdit = (val, i) => {
    const edited = [...todo]
    if(val === null){
      edited[i].edit = true
    }else{
      edited[i].edit = false
      edited[i].text = val
    }
    setTodo(edited)
  }

  const completed = (i) => {
    const edited = [...todo]
    edited[i].completed = !edited[i].completed

    setTodo(edited)
  }

  const completedAll = () => {
    const task = todo.map(el => {
      return el = {
        ...el,
        completed : true
      }
    })
    setTodo(task)
  }

  const filter = (filterby) =>{
    let filtered = []
    if(filterby === "completed"){
      filtered = todo.filter(() => {}); //filter disini
    }else if(filterby === "not complete"){
      filtered = todo.filter(() => {}); 
    }
    setFilteredTodo(filtered);
    //kalo sudah di filter tampilin state filteredTodo bukan todo
  }
  
  return (
    <div className="App">
        <Header />
        <Todo
          todo={todo}  
          add={add} 
          remove={remove}
          edit={handleEdit}
          complete={completed}
          completeAll={completedAll}
        >
          <h2>Todo from App.jsx</h2>
          <img src={"https://image.tmdb.org/t/p/original" + image} alt="img"/>
        </Todo>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about/:a">
              <About />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
  )
}
