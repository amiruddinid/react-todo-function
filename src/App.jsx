import React, { Component } from 'react';
import Header from './component/Header';
import Todo from './component/Todo';
import './App.css';

class App extends Component {
  state = { 
    todo: [
    ]
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
  }

  remove = (i) => {
    let newTodo = this.state.todo;
    newTodo.splice(i, 1);
    this.setState({todo:newTodo})
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

  render() {
    return (
      <div className="App">
        <Header />
        <Todo 
          todo={this.state.todo}  
          add={this.add} 
          remove={this.remove}
          edit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
