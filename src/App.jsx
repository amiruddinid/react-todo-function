import React, { Component } from 'react';
import Header from './component/Header';
import Todo from './component/Todo';
import './App.css';

class App extends Component {
  state ={ 
    todo: [
      {
        text: 'Todo 1',
        completed: false,
        date:new Date(),
      },
      {
        text: 'Todo 2',
        completed: false,
        date:new Date(),
      }
    ]
  }

  add = (value) => {
    this.setState({
      todo:[
        ...this.state.todo,
        {
          text: value,
          completed: false,
          date:new Date(),
        }
      ]
    })
    console.log(this.todo)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todo todo={this.state.todo} add={this.add}/>
      </div>
    );
  }
}

export default App;
