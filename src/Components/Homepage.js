import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <h1>This is Homepage</h1>

            <div className='mt-5 py-5'>
                <Link to="/users">Go to Users Page</Link>
            </div>
        </div>
    )
}

export default Homepage
