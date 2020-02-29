import React, { useState } from 'react'

//https://www.googleapis.com/youtube/v3/search?part=id,snippet&q={termo_de_busca}&key={API_KEY}
//'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCXgGY0wkgOzynnHvSEVmE3A&key=[YOUR_API_KEY]' \
//https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&maxResults=10&order=viewCount&q=skateboarding+dog&type=video

export default function Youtube({ history }) {

    const keyAPI = 'AIzaSyCgUeaEWo0f3A8WQOHhusInjTeHUjUF-Jk'
    const result = 10

    const [term, setTerm] = useState('')
    const [resultyts, setResultyts] = useState([])


    var searchURL = `https://www.googleapis.com/youtube/v3/search?key=${keyAPI}&part=id%2C%20snippet&maxResults=${result}&q=${term}`

    const handleSubmit = event => {
        event.preventDefault();
    }

    const search = () => {
        fetch(searchURL)
            .then((response) => response.json())
            .then((responseJson) => {
                const result = responseJson.items.map(obj => obj)
                setResultyts(result)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const viewMore = (id) => {
        if (id.channelId !== '' && id.channelId != null) {
            history.push(`/channel/${id.channelId}`)
        } else {

            history.push(`/details/${id.videoId}`)
        }

    }

    return (

        <div>
            <h1> teste </h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="pesquisar" onChange={e => setTerm(e.target.value)} value={term}></input>
                <button onClick={search}>search</button>
            </form>

            {resultyts.map((resulty, i) => (
                < ul >
                    <li key={i}>
                        <img src={resulty.snippet.thumbnails.medium.url} alt={resulty.snippet.title} />
                        <h3>{resulty.snippet.title}</h3>
                        <p>{resulty.snippet.description}</p>
                        <button onClick={() => viewMore(resulty.id)}>ver mais</button>
                    </li>
                </ul>
            ))
            }

        </div >
    )

}