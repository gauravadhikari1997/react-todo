var React = require('react');
var ReactDOM = require('react-dom');
var {
  Router,
  Route,
  IndexRoute,
  hashHistory
} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');

var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the car'));
store.dispatch(actions.setSearchText('car'));
store.dispatch(actions.toggleShowCompleted());
//Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp />, document.getElementById('app'));