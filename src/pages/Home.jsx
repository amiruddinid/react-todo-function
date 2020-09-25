import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        movie:[]
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=5fbf1d61c89e7519436ef1bceba978f8')
            .then((res, err) => {
               console.log(res)
               return res.json()
            })
            .then((res) => {
                if(!res.results){
                    throw Error('Error: Data not found')
                }
                this.setState({
                    movie:res.results
                })
            })
            .catch(err => console.log(err))
    }
    
    componentDidUpdate(){
        console.log(this.state.movie)
    }

    render() {
        const { movie } = this.state;
        return (
            <div>
                <h1>Home</h1>
                <div className="movie">
                    { movie.length > 0 ? movie.map((data) => 
                        <div>
                            <p>{data.title}</p>
                            <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} alt={data.title} />
                        </div>
                    ) : 'Data gak ada bro'}
                </div>
            </div>
        )
    }
}