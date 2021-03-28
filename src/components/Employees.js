import React from 'react'
import Card from 'react-bootstrap/Card'
import { Col, Row } from 'react-bootstrap'

function EmployeeCard(props) {

    return (
        <Card>
        <Card.Header as="h5" key= {props.id}>{props.firstName} {props.lastName}</Card.Header>
        <Card.Body>
            <Row>
                <Col>
                <img src={props.image} alt={props.lastName} width="100"></img>

                </Col>
                <Col>
                <Card.Text>email: {props.email}</Card.Text>
                <Card.Text>phone: {props.phone}</Card.Text>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    )
}

export default EmployeeCard