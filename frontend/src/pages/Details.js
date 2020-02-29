import React, { useState, useEffect } from 'react'

export default function VideoView({ match }) {
    const [videos, setVideos] = useState([])
    const keyAPI = 'AIzaSyCgUeaEWo0f3A8WQOHhusInjTeHUjUF-Jk'

    const videoURL = `https://www.googleapis.com/youtube/v3/videos?id=${match.params.id}&part=snippet,statistics&maxResults=1&key=${keyAPI}`

    useEffect(() => {
        function loadChannel() {
            fetch(videoURL)
                .then((response) => response.json())
                .then((response) => {
                    const video = response.items.map(obj => obj)
                    setVideos(video)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        loadChannel()
    }, [match.params.id])
    console.log(videos)
    return (
        <div>
            <h1>videos view</h1>
        </div>
    )
}