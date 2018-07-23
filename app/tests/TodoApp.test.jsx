var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toBeTruthy();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test wala text';
    var todoapp = TestUtils.renderIntoDocument(<TodoApp />);
    todoapp.setState({ todos: []});
    todoapp.handleAddTodo(todoText);

    expect(todoapp.state.todos[0].text).toBe('test wala text');
  });
});
