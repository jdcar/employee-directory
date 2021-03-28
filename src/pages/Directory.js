import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Employees from '../components/Employees'
import data from "../data/data.json"

class Directory extends Component {
    state = {
        data
    }

    handleClearForm = event => {
        event.preventDefault() 
        this.setState({data})
    }

    handleFormInput = event => {
        event.preventDefault()
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
          });
    }

    handleFormSubmit = event => {

        event.preventDefault()
        let searchName = this.state.firstName
        console.log(event.target)
        const data = this.state.data.filter(employee => employee.name.first === searchName)
        this.setState({data})
        console.log(data)
        
    }

    render() {
        return (
            <div className="container">
                <h2>Directory</h2>
                
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Search by name</Form.Label>
                    <Form.Control 
                    type="name" 
                    placeholder="Enter first name" 
                    value={this.state.firstName} 
                    name="firstName"
                    onChange={this.handleFormInput}
                    />
                    <Form.Text className="text-muted">
                        {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                </Form.Group>

                <Button onClick={this.handleFormSubmit}
                    variant="primary"
                    type="submit">
                    Search
                </Button>
                <Button 
                    variant="primary"
                    type="clear">
                    Clear Results
                </Button>
            </Form>

                {this.state.data.map(employee => (
                    <Employees
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        phone={employee.phone}
                        email={employee.email}
                        image={employee.picture.large}
                        key = {employee.login.uuid}
                    />

                ))}

            </div>
        )
    }
}

export default Directory