import React, { Component } from 'react'
import List from './List'

export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      value : this.props.value,
    }
  }

  render() {
    return (
      <div className="Todo">
        {this.props.children}
        <input type="text" onChange={(e) => this.setState({ value : e.target.value}) }/>
        <button type="button" onClick={() => this.props.add(this.state.value)}>Add</button>
        <button type="button" onClick={() => this.props.completeAll()}>Complete All</button>
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