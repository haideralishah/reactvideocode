import React, { Component } from 'react';

class Logger extends Component {

    constructor(props) {
        super(props);
        console.log('custructor running');
    }

    componentWillMount() {
        console.log('component will mount method');
    }

    componentDidMount() {
        console.log('component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Next Props: ', nextProps);
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('should component update');
        console.log('New Props: ', newProps);
        console.log('New State: ', newState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('component will update');
        console.log('New Props: ', nextProps);
        console.log('New State: ', nextState);
    }

    componentDidUpdate(oldProps, oldState) {
        console.log('component did update');
        console.log('old Props: ', oldProps);
        console.log('old State: ', oldState);
    }

    componentWillUnmount() {
        console.log('component will unmount trigered');
    }


    render() {
        console.log('render method')
        return (
            <h1>{this.props.time}</h1>
        )
    }

}

export default Logger;