import React, { Component } from 'react'
import List from './List'

export default class Todo extends Component {
  state = {
    value : "",
    date: "",
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.setState({ value : e.target.value}) }/>
        <button type="button" onClick={() => this.props.add(this.state.value)}>Add</button>
        <List 
          todo={this.props.todo} 
          remove={this.props.remove} 
          edit={this.props.edit}
          complete={this.props.complete}
        />
      </div>
    )
  }
}