import React, { useState } from 'react'

//https://www.googleapis.com/youtube/v3/search?part=id,snippet&q={termo_de_busca}&key={API_KEY}
//'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCXgGY0wkgOzynnHvSEVmE3A&key=[YOUR_API_KEY]' \


export default function Youtube() {

    const keyAPI = 'AIzaSyCgUeaEWo0f3A8WQOHhusInjTeHUjUF-Jk'
    const result = 10

    const [term, setTerm] = useState('')
    const [resultyts, setResultyts] = useState([])

    var searchURL = `https://www.googleapis.com/youtube/v3/search?key=${keyAPI}&part=snippet&maxResults=${result}&q=${term}`
    const handleSubmit = event => {
        event.preventDefault();
    }

    const search = () => {
        fetch(searchURL)
            .then((response) => response.json())
            .then((responseJson) => {
                const result = responseJson.items.map(obj => obj.snippet)
                setResultyts(result)
                console.log(resultyts)

            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (

        <div>
            <h1> teste </h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="pesquisar" onChange={e => setTerm(e.target.value)} value={term}></input>
                <button onClick={search}>search</button>
            </form>

            {resultyts.map((resulty, i) => (
                <ul>
                    <li key={i}>
                        <img src={resulty.thumbnails.medium.url} alt={resulty.title} />
                        <h3>{resulty.title}</h3>
                        <p>{resulty.description}</p>
                        <button>ver Video</button>
                    </li>
                </ul>
            ))}

        </div>
    )

}