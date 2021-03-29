import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Employees from '../components/Employees'
import data from "../data/data.json"

class Directory extends Component {
    state = {
        data,
        searchResult: false,
        firstName: "",
        lastName: "",
        noResults: false,
        retrySearch: ""
    }

    handleClearForm = event => {
        event.preventDefault()
        // this.state.searchResult = false
        this.setState({searchResult: false})
        this.setState({firstName: ""})
        this.setState({lastName: ""})
        this.setState({ data })
        this.setState({noResults: false})

    }

    handleFormInput = event => {
        event.preventDefault()
        let value = event.target.value;
        let name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {

        event.preventDefault()

        this.setState({searchResult: true})
        // console.log(this.state.firstName)

        if (this.state.firstName) {

            let searchName = this.state.firstName
            // console.log(event.target)
            let data = this.state.data.filter(employee => employee.name.first === searchName)
            this.setState({ data })
            console.log(data)

            if (data[0] == null) {
                // Add no results to the page
                console.log("no result")
                this.setState({noResults: true})
                this.setState({searchResult: true})

            }

        }
        else if (this.state.lastName) {
            let searchName = this.state.lastName
            // console.log(event.target)
            let data = this.state.data.filter(employee => employee.name.last === searchName)
            this.setState({ data })
            
            if (data[0] == null) {
                // Add no results to the page
                console.log("no result")
                this.setState({noResults: true})
                this.setState({searchResult: true})

            }
        }
        // console.log(data)

    }

    handleArraySort = (event) => {
        event.preventDefault()
        if (event.target.value === "sortByFirst") {
            data.sort(function (a, b) {
                a = a.name.first.toLowerCase()
                b = b.name.first.toLowerCase()

                return a < b ? -1 : a > b ? 1 : 0;
            });

            this.setState(data);
        } else if (event.target.value === "sortByLast") {
            data.sort(function (a, b) {
                a = a.name.last.toLowerCase();
                b = b.name.last.toLowerCase();

                return a < b ? -1 : a > b ? 1 : 0;
            });
            this.setState(data);
        }
    }

    render() {
      
        let button
        if (!this.state.searchResult) {
            button = <Button className="searchButtons" onClick={this.handleFormSubmit} variant="primary" type="submit">Search</Button>
        } 

        let retrySearch
        if (this.state.noResults) {
            retrySearch = <p className="no-result">No results, please try again!</p> 
            
        }
        return (
            <div className="container">
                <h2 span className="headings">Directory</h2>
                <Row>

                    <Col className="column-align">
                        <select onChange={this.handleArraySort}>
                            <option value="options">Sort options</option>
                            <option value="sortByFirst">Sort by first name</option>
                            <option value="sortByLast">Sort by last name</option>
                        </select>
                    </Col>
                    <Col>
                        <Form>

                            <Form.Group className="searchBoxes" controlId="formBasicEmail">
                                {/* <Form.Label>Search by first name</Form.Label> */}
                                <Form.Control type="name" placeholder="Enter first name" value={this.state.firstName} name="firstName"
                                    onChange={this.handleFormInput} />
                                <Form.Text className="text-muted">
                                    {/* We'll never share your email with anyone else. */}
                                </Form.Text>

                                {/* <Form.Label>Search by last name</Form.Label> */}
                                <Form.Control type="name" placeholder="Enter last name" value={this.state.lastName} name="lastName"
                                    onChange={this.handleFormInput} />
                                <Form.Text className="text-muted">
                                    {/* We'll never share your email with anyone else. */}
                                </Form.Text>

                            </Form.Group>
                            {' '}

                            {button}
                            <Button
                                onClick={this.handleClearForm} 
                                variant="primary"
                                type="Reset"
                                value="Reset" >
                                Clear Search
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <p> </p>
                    <p> </p>
                </Row>

                {retrySearch}
                {this.state.data.map(employee => (
                    <Employees
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        phone={employee.phone}
                        email={employee.email}
                        image={employee.picture.large}
                        key={employee.login.uuid}
                    />


                ))}
                <Row>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </Row>
            </div>

        )
    }
}

export default Directory