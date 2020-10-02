import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Login extends Component{
    state = {
        email: '',
        password: '',
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    submit(e){
        e.preventDefault();
        fetch('http://appdoto.herokuapp.com/api/users/login', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(result => {
            console.log('Success:', result);
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('isLogin', true);
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.submit(e)}>
                <input type="email" name="email" onChange={(e) => this.handleChange(e)}/>
                <input type="password" name="password" onChange={(e) => this.handleChange(e)}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
export default withRouter(Login);