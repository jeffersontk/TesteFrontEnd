import React, { useState, useEffect } from 'react'

//https://www.googleapis.com/youtube/v3/search?part=id,snippet&q={termo_de_busca}&key={API_KEY}
//'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCXgGY0wkgOzynnHvSEVmE3A&key=[YOUR_API_KEY]' \


const Youtube = () => {
    const keyAPI = 'AIzaSyCgUeaEWo0f3A8WQOHhusInjTeHUjUF-Jk'
    const result = 10

    const [resultyt, setResultyt] = useState([])
    const [term, setTerm] = useState('')

    var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${keyAPI}&part=snippet&maxResults=${result}&q=${term}`

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        fetch(finalURL, { signal: signal })
            .then((response) => response.json())
            .then((responseJson) => {
                const resultyt = responseJson.items.map(obj => obj.id.videoId)
                setResultyt({ resultyt })
            })
            .catch((error) => {
                console.log(error)
            })
        return function cleanup() {
            abortController.abort()
        }
    })

    const handleSubmit = event => {
        event.preventDefault();
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="pesquisar" onChange={e => setTerm(e.target.value)} value={term}></input>
                <button>search</button>
            </form>

            <br></br>
            {resultyt.map((resultyt, i) => {
                var frame = <ul key={i}> <li>{resultyt} </li> </ul>
                return frame
            })}
        </div>
    )

}
export default Youtube