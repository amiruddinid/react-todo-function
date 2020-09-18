import React, { Component } from 'react'

export default class List extends Component {
    state = {
        value:""
    }

    handleEdit(val,i){
        this.setState({
            value:val
        })
        this.props.edit(null, i)
    }

    render() {
        return (
            <ul>
                {
                    this.props.todo.map((el, i) => (
                        <li>
                            {
                                !el.edit ? 
                                    el.completed ? 
                                    <s>
                                        {el.text} 
                                        <span onClick={() => this.props.remove(i)}>X</span> 
                                        <span onClick={() => this.handleEdit(el.text, i)}>Edit</span>
                                        <span onClick={() => this.handleEdit(el.text, i)}>Complete</span> 
                                    </s>
                                    :
                                    <>
                                        {el.text} 
                                        <span onClick={() => this.props.remove(i)}>X</span>  
                                        <span onClick={() => this.handleEdit(el.text, i)}>Edit</span> 
                                        <span onClick={() => this.props.complete(i)}>Complete</span> 
                                    </>
                                :
                                    <>
                                        <input type="text" value={this.state.value} onChange={(e) => this.setState({ value : e.target.value}) } />
                                        <button onClick={() => this.props.edit(this.state.value, i)}>Save</button>
                                    </>
                            }
                        </li>
                    ))
                }
            </ul>
        )
    }
}
