var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


// Load foundation with css loader (css!) and style loader (style!)
$(document).foundation();

// app css
require('style!css!sass!applicationStyles'); // remember to define in webpack config alias

ReactDOM.render(
    <Router history={ hashHistory }>
      <Route path="/" component={ Main }>
        
      </Route>
    </Router>,
    document.getElementById('app')
);
