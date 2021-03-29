import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <Jumbotron className="jumbotron">
            <h1 span className="headings">My Company</h1>
            <p>
                This is a company, people work here. There's a directory!
            </p>
            <p>
                <Link to="/"><Button variant="secondary" size="lg" active>
                    Home
                </Button></Link>{' '}
                
                <Link to="/directory"><Button variant="secondary" size="lg" active>
                    Employee Directory
                </Button></Link>

            </p>
        </Jumbotron>
    )
}

export default Navbar
