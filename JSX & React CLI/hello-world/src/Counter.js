import React, { Component } from 'react';


class Counter extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>My Counter App</h1>
                <button onClick={this.props.increment}>+</button>
                <span>{this.props.counter}</span>
                <button onClick={this.props.decrement}>-</button>
            </div>
        )
    }

}

export default Counter;