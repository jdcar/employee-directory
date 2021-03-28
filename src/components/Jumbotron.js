import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Link to="/directory"><Button to="/directory" variant="secondary" size="lg" active>
                    Employee Directory
                </Button></Link>
            </p>
        </Jumbotron>
    )
}

export default Navbar
