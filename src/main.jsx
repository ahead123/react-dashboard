var React = require('react');

var ReactDOM = require('react-dom');

var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager headingColor="#16a085" title="ToDo" />, document.getElementById('todo'));
ReactDOM.render(<ListManager headingColor="#c0392b" title="Christmas" />, document.getElementById('christmas'));