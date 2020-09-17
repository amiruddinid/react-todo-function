import React, { Component } from 'react'
import List from './List'

export default class Todo extends Component {
  state = {
    value : ""
  }
  submit(){
    this.props.add(this.state.value)
  }
  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.setState({ value : e.target.value}) }/>
        <button type="button" onClick={() => this.submit()}>Add</button>
        <List todo={this.props.todo} />
      </div>
    )
  }
}