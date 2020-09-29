import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        todo:[],
        isLogin: localStorage.getItem('isLogin'),
        token: localStorage.getItem('token')
    }

    

    componentDidMount(){
        console.log(this.state)
        if(this.state.isLogin){
            fetch('http://appdoto.herokuapp.com/api/todo',{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.state.token
                    },
                })
                .then((res, err) => {
                    return res.json()
                })
                .then((res) => {
                    this.setState({
                        todo:res.data
                    })
                })
                .catch(err => console.log(err))
        }
    }
    
    componentDidUpdate(){
        console.log(this.state.movie)
    }

    logout = (e) => {
        localStorage.removeItem('token')
        localStorage.setItem('isLogin', false)
        this.setState({
            isLogin:false,
            token: ''
        })
    }

    render() {
        const { todo, isLogin, token } = this.state;
        return (
            <div>
                <h1>Home</h1>
                { isLogin ? <h2 onClick={this.logout}>Halo, {token}</h2> : ''}
                <div className="movie">
                    { todo.length > 0 ? todo.map((data) => 
                        <div>
                            <p>{data.title}</p>
                        </div>
                    ) : 'Data gak ada bro'}
                </div>
            </div>
        )
    }
}