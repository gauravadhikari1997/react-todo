var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toBeTruthy();
  });

  it('should render a component for each todo', () => {
    var todos = [
      {
        id: 1,
        text: 'Walk the dog'
      },
      {
        id: 2,
        text: 'water plants'
      },
      {
        id: 3,
        text: 'do homework'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
