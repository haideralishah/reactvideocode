import React, { Component } from 'react';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            allUsers: [],
            radioGroup: {
                MEANStack: false,
                MERNStack: true,
                LAMPStack: false
            },
            checkboxGroup: {
                mondodb: false,
                express: false,
                react: true,
                node: false
            },
            selectedValue: 'Node'
        }
        this.formHander = this.formHander.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        
        
    }

    formHander(event) {
        // console.log(event.target.value, 'event', event);
        this.setState({
            username: event.target.value
        })
    }

    clickHandler(event) {
        let currentUser = this.state.allUsers;
        currentUser.push(this.state.username);
        this.setState({
            allUsers: currentUser,
            username: '',

        })
        console.log(this.state.allUsers);
    }

    radioHandler(event) {
        console.log(event.target.value);
        let radioGroup = this.state.radioGroup;
        for (var key in radioGroup) {
            radioGroup[key] = false
        }

        radioGroup[event.target.value] = event.target.checked;

        this.setState({
            radioGroup: radioGroup
        })

    }


    checkboxHandler(event) {
        let checkbox = this.state.checkboxGroup;
        checkbox[event.target.value] = event.target.checked;
        this.setState({
            checkboxGroup: checkbox
        })

    }

    selectHandler(event){
        this.setState({
            selectedValue: event.target.value
        })
    }

    emailHandler(event){
        console.log(this.refs.subscriberEmail.value);
        
    }
    render() {
        return (
            <div>


                <label>Email: <input type='email' ref='subscriberEmail'/></label>
                <button onClick={this.emailHandler}>Subscribe</button>

                {/* <h1>Hello Forms</h1>
                <input type='text' name='username' value={this.state.username} onChange={this.formHander} />
                <br />

                Developers Category:
                <br />
                <label>
                    MEAN Stack <input type='radio' name='devcategory' value='MEANStack' checked={this.state.radioGroup['MEANStack']} onChange={this.radioHandler} />
                </label>
                <br />
                <label>
                    MERN Stack <input type='radio' name='devcategory' value='MERNStack' checked={this.state.radioGroup['MERNStack']} onChange={this.radioHandler} />
                </label>
                <br />
                <label>
                    LAMP Stack <input type='radio' name='devcategory' value='LAMPStack' checked={this.state.radioGroup['LAMPStack']} onChange={this.radioHandler} />
                </label>
                <br />



                Technologies:
                <br />
                <label>
                    MongoDB <input type='checkbox' name='tech' value='mondodb' checked={this.state.checkboxGroup['mondodb']} onChange={this.checkboxHandler} />
                </label>
                <br />
                <label>
                    Express <input type='checkbox' name='tech' value='express' checked={this.state.checkboxGroup['express']} onChange={this.checkboxHandler} />
                </label>
                <br />
                <label>
                    React <input type='checkbox' name='tech' value='react' checked={this.state.checkboxGroup['react']} onChange={this.checkboxHandler} />
                </label>
                <br />
                <label>
                    Node <input type='checkbox' name='tech' value='node' checked={this.state.checkboxGroup['node']} onChange={this.checkboxHandler} />
                </label>
                <br />


                <br />

                <select value={this.state.selectedValue} onChange={this.selectHandler}>
                    <option value='Rupy'>Rupy</option>
                    <option value='Python'>Python</option>
                    <option value='Node'>Node</option>

                </select>


                <button onClick={this.clickHandler}>Save User</button> */}



            </div>
        )
    }
}

export default Forms;