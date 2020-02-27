import React, { Component } from 'react'

const keyAPI = 'AIzaSyCgUeaEWo0f3A8WQOHhusInjTeHUjUF-Jk'
const termSearch = 'codigofontetv'
const result = 10
//https://www.googleapis.com/youtube/v3/search?part=id,snippet&q={termo_de_busca}&key={API_KEY}
//'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCXgGY0wkgOzynnHvSEVmE3A&key=[YOUR_API_KEY]' \

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${keyAPI}&part=snippet&maxResults=${result}&q=${termSearch}`

class Youtube extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultyt: [],
            term: ''
        }
        this.clicked = this.clicked.bind(this)
    }
    clicked() {
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId)
                this.setState({ resultyt })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        })
        console.log(this.state.term)
    }
    handleSubmit = event => {
        event.preventDefault();
    }
    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="pesquisar" onChange={this.handleChange} value={this.state.term}></input>
                    <button onClick={this.clicked}>search</button>
                </form>

                <br></br>
                {this.state.resultyt.map((link, i) => {
                    var frame = <div key={i}> <iframe title="This is a unique title" width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> </div>
                    return frame
                })}
            </div>
        )
    }
}
export default Youtube