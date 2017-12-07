import React, { Component } from 'react';


class Contact extends Component {

    render() {
        let users = {
            2643: {
                name: 'haider',
                cell: 'xyz'
            },
            2644: {
                name: 'ali',
                cell: 'abc'
            },
            2645: {
                name: 'Shah',
                cell: 'ghq'
            },
        }
        let requiredUser = users[this.props.match.params.rollnumber]

        return (
            <div className="App">
                <h1>Hello Contact</h1>


                User Name: {requiredUser.name}
                <br />
                User Cell: {requiredUser.cell}


            </div>
        );
    }
}

export default Contact;
