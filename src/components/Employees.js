import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Col, Row } from 'react-bootstrap'

const Employees = () => {

    const [image, setImage] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    useEffect(() => {
        fetchEmployees()
    }, [])

    const fetchEmployees = async () => {

        const response = await axios(`https://randomuser.me/api/?results=1`)

        console.log(response)

        setImage(response.data.results[0].picture.large)
        setFirstName(response.data.results[0].name.first)
        setLastName(response.data.results[0].name.last)
        setEmail(response.data.results[0].email)
        setPhone(response.data.results[0].phone)

    }
    return (

        <Card>
        <Card.Header as="h5">{firstName} {lastName}</Card.Header>
        <Card.Body>
            <Row>
            <Col>
             <img src={image} alt={lastName} width="100"></img>

            </Col>
            <Col>
                <Card.Text>C.E.O.</Card.Text>
                <Card.Text>{email}</Card.Text>
                <Card.Text>{phone}</Card.Text>
            </Col>
            </Row>
        </Card.Body>
    </Card>

        // <div>
        //     <p> {firstName} {lastName}</p>
        // </div>

    )
}

export default Employees