import React from 'react'
import './index.css'
import {Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="brand">
                <h1>KEWL</h1>
            </div>

            <div className="navbar_links">
                <div className="navlink">
                    <Link to='/help'>Find Help</Link>
                </div>
                <div className="navlink">
                    <Link exact to='/'>Provide Help</Link>
                </div>
                <div className="navlink">
                    <Link to='/organization'>Organizations</Link>
                </div>
            </div>
        </div>
    )
}
