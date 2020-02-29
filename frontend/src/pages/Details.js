import React, { useState, useEffect } from 'react'


export default function VideoView({ match, history }) {
    const [videos, setVideos] = useState([])
    const keyAPI = 'AIzaSyDNsDWSFTRFQYLRjfYp91HOOhKQm1e85RY'

    const videoURL = `https://www.googleapis.com/youtube/v3/videos?id=${match.params.id}&part=snippet,statistics&maxResults=1&key=${keyAPI}`

    useEffect(() => {
        function loadChannel() {
            fetch(videoURL)
                .then((response) => response.json())
                .then((responseJson) => {
                    const video = responseJson.items.map(obj => obj)
                    setVideos(video)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        loadChannel()
    }, [match.params.id])

    const backToPage = () => {
        history.push('/')
    }
    return (
        <div>
            {videos.map(video => (
                <ul>
                    <li key={video.id}>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <h1>{video.snippet.title}</h1>
                        <p>{video.snippet.description}</p>
                        <p>{video.statistics.viewCount}</p>
                        <p>{video.statistics.likeCount}</p>
                        <p>{video.statistics.dislikeCount}</p>
                        <button onClick={backToPage} >voltar</button>
                    </li>
                </ul>
            ))
            }

        </div>
    )
}