import React, { Component } from 'react';
import Header from './component/Header';
import Todo from './component/Todo';
import './App.css';

let t1,t2 = 0;
class App extends Component {
  constructor(){
    super()
    this.state = { 
      todo: [
        {
          text: '1 Task Complete',
          completed: true,
          date:new Date(),
          edit:false
        }
      ]
    }
    t1 = performance.now()
  }

  componentDidMount(){
    if(JSON.parse(localStorage.getItem('todos'))){
      this.setState({todo:JSON.parse(localStorage.getItem('todos'))});
    }
  }

  componentDidUpdate(){
    localStorage.setItem('todos', JSON.stringify(this.state.todo));
  }

  add = (value, date) => {
    console.log(value)
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
    /// localStorage setItem
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

  render() {
    console.log({ fromMounting : performance.now() - t1 + 'ms', fromDidMount : performance.now() - t2 + 'ms' })
    return (
      <div className="App">
        <Header />
        <Todo 
          todo={this.state.todo}  
          add={this.add} 
          remove={this.remove}
          edit={this.handleEdit}
          complete={this.completed}
        />
      </div>
    );
  }
}

export default App;
