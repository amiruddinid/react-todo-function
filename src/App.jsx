import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './component/Header';
import Todo from './component/Todo';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import Login from './pages/Login';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = { 
      todo: [],
      filteredTodo:[],
      image:'/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg'
    }
  }

  componentDidMount(){
    if(JSON.parse(localStorage.getItem('todos'))){
      this.setState({todo:JSON.parse(localStorage.getItem('todos'))});
    }
  }

  componentDidUpdate(){
    localStorage.setItem('todos', JSON.stringify(this.state.todo));
  }

  add = (value) => {
    this.setState({
      todo:[
        ...this.state.todo,
        {
          text: value,
          completed: false,
          date:new Date(),
          edit:false
        }
      ]
    })
  }

  remove = (i) => {
    let newTodo = this.state.todo;
    newTodo.splice(i, 1);
    this.setState({todo:newTodo})
    // localStorage setItem
  }

  handleEdit = (val, i) => {
    const edited = this.state.todo
    if(val === null){
      edited[i].edit = true
    }else{
      edited[i].edit = false
      edited[i].text = val
    }
    this.setState({todo:edited})
  }

  completed = (i) => {
    const edited = this.state.todo
    edited[i].completed = !edited[i].completed

    this.setState({todo:edited})
  }

  completedAll = () => {
    const task = this.state.todo.map(el => {
      return el = {
        ...el,
        completed : true
      }
    })
    console.log(task)
    this.setState({todo:task})
  }

  filter = (filterby) =>{
    let filtered = []
    if(filterby === "completed"){
      filtered = this.state.todo.filter(() => {}); //filter disini
    }else if(filterby === "not complete"){
      filtered = this.state.todo.filter(() => {}); 
    }
    this.setState({filteredTodo:filtered});
    //kalo sudah di filter tampilin state filteredTodo bukan todo
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todo
          todo={this.state.todo}  
          add={this.add} 
          remove={this.remove}
          edit={this.handleEdit}
          complete={this.completed}
          completeAll = {this.completedAll}
        >
          <h2>Todo from App.jsx</h2>
          <img src={"https://image.tmdb.org/t/p/original" + this.state.image} alt="img"/>
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
    );
  }
}

export default App;
