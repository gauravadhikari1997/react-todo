var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
const jest = require('jest-mock');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toBeTruthy();
  });

  it('should call addTodo if valid Todo entered', () => {
    var todo = 'walking';
    var spy = jest.fn();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy} />);

    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todo.value = todo;
    spy();
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith('walking');
    });

    it('should not call addTodo if invalid Todo entered', () => {
      var spy = jest.fn();
      spy();
      var addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy} />);
      var $el = $(ReactDOM.findDOMNode(addTodo));
      addTodo.refs.todo.value = '';

      TestUtils.Simulate.submit($el.find('form')[0]);
      expect(spy).toNotHaveBeenCalledWith();
    });
});
