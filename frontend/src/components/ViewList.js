import React from 'react'

export default function ViewList(props, history) {


    const viewMore = (id) => {
        if (id.channelId !== '' && id.channelId != null) {
            history.push(`/channel/${id.channelId}`)
        } else {

            history.push(`/details/${id.videoId}`)
        }
    }

    return (
        <div>
            < ul >
                {props.result.map((resulty, i) => (
                    <li key={i}>
                        <img src={resulty.snippet.thumbnails.medium.url} alt={resulty.snippet.title} />
                        <h3>{resulty.snippet.title}</h3>
                        <p>{resulty.snippet.description}</p>
                        <button onClick={() => viewMore(resulty.id)}>ver mais</button>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}