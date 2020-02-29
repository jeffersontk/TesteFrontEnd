import React, { useState } from 'react'

// var viewURL = `https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=id%2C%20snippet&maxResults=10&order=viewCount&q=}&type=video`

export default function ChannelView({ match }) {
    const [channels, setChannel] = useState('')
    const keyAPI = 'AIzaSyCgUeaEWo0f3A8WQOHhusInjTeHUjUF-Jk'

    const channelURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${match.params.id}key=${keyAPI}`
    console.log(match.params.id)

    function loadChannel() {
        fetch(channelURL)
            .then((response) => response.json())
            .then((responseJson) => {
                const channel = responseJson.items.map(obj => obj)
                setChannel(channel)
                console.log(channels)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    loadChannel()

    return (
        <div>
            <h1>Channel detalies</h1>
        </div>
    )
}