import React, { Component } from 'react'
import axios from 'axios'
import Employees from '../components/Employees'
import data from "../data/data.json"

class Directory extends Component {
    state = {
        data
    }

    render() {
        return (
            <div className="container">
                <h2>Directory</h2>
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