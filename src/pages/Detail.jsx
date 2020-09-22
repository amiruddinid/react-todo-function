import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : {
                title: '',
                id : 0,
            }
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/' + this.props.match.params.id)
            .then(response => response.json())
            .then(json => this.setState({data:json}))
    }
    render() {
        return (
            <div>
                <h1>{this.state.data.title}</h1>
                <h1>{this.state.data.id}</h1>
            </div>
        )
    }
}
export default withRouter(Detail);