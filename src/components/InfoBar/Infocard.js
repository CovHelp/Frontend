import React from 'react'
import './index.css'

export default function Infocard({title, body}) {
    return (
        <div className="info-card">
            <p className="info-card-title">{title}</p>
            <p className="info-card-body">{body}</p>
        </div>
    )
}
