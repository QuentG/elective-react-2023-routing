import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Link to='/blog'>Blog</Link>
            <h1>Home Page</h1>
        </div>
    )
}

export default HomePage