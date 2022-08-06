import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@nextui-org/react'

const Banner = () => {
    return (
        <div>
            <h1>The New York Times</h1>
            <Link to={"/"}><Button>HOME</Button></Link>
        </div>
    )
}

export default Banner