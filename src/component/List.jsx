import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todo.map(element => (
                        <li>{element.text}</li>
                    ))
                }
            </ul>
        )
    }
}
