// var h1 = React.createElement('h1', null, 'Hello World');
// var content = document.getElementById('content');


// ReactDOM.render(h1, content);

























// var a = React.createElement('a', {href: 'https://www.google.com', target: '_blank', title: 'Google Link'}, 'Google');
// var content = document.getElementById('content');


// ReactDOM.render(a, content);









var h1 = React.createElement('h1', null, 'Hello World');
var p = React.createElement('p', null, 'A quick  brown fox jumps over the lazy dog.');

var content = document.getElementById('content');

ReactDOM.render(
    React.createElement('div', null, h1, p)
    ,
    content
);