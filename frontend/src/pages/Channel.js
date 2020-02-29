import React, { useState, useEffect } from 'react'

// var viewURL = `https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=id%2C%20snippet&maxResults=10&order=viewCount&q=}&type=video`

export default function ChannelView({ match }) {
    const [channels, setChannel] = useState([])
    const keyAPI = 'AIzaSyDNsDWSFTRFQYLRjfYp91HOOhKQm1e85RY'
    console.log(match.params.id)
    const channelURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${match.params.id}&key=${keyAPI}`

    useEffect(() => {
        function loadChannel() {
            fetch(channelURL)
                .then((response) => response.json())
                .then((responseJson) => {
                    const channel = responseJson.items.map(obj => obj)
                    setChannel(channel)

                })
                .catch((error) => {
                    console.log(error)
                })
        }
        loadChannel()
    }, [match.params.id])

    return (
        <div>
            {channels.map(channel => (
                <ul>
                    <li key={channel.id}>
                        <img src={channel.snippet.thumbnails.medium.url} alt={channel.snippet.title}></img>
                        <h1>{channel.snippet.title}</h1>
                        <p>{channel.snippet.description}</p>
                        <p>{channel.statistics.viewCount}</p>
                        <p>{channel.statistics.subscriberCount}</p>
                        <p>{channel.statistics.videoCount}</p>
                    </li>
                </ul>
            ))
            }
        </div>
    )
}