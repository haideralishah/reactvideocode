
// var h1 = React.createElement('h1', null, 'First Component');
// var p = React.createElement('p', null, 'A quick brown fox jumps over the lazy dog.');

// class CustomeComponent extends React.Component {

//     render() {
//         return (
//             React.createElement('div', null, h1, p)
//         );
//     }

// }


// var firstComponent = React.createElement(CustomeComponent, null);

// var content = document.getElementById('content');

// ReactDOM.render(firstComponent, content);












class CustomeLink extends React.Component {
    render() {
        console.log(this.props, 'this.props');
        return (
            React.createElement('a', this.props, this.props.linktext)

        )
    };
}

var myLinks = React.createElement('div', null,

    React.createElement(CustomeLink, { href: 'https://www.google.com', linktext: 'Google', title: 'Google Link' }),
    React.createElement(CustomeLink, { href: 'https://www.facebook.com', linktext: 'Facebook', title: 'Facebook Link' }),
    React.createElement(CustomeLink, { href: 'https://www.youtube.com', linktext: 'Youtube', title: 'Youtube Link' })

)



var content = document.getElementById('content');

ReactDOM.render(myLinks, content);

