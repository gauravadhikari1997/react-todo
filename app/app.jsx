var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <h1> ReactBoilerPlate3</h1>, document.getElementById('app'));
