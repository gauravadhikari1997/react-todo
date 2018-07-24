var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'water plants',
          completed: true
        },
        {
          id: uuid(),
          text: 'do homework',
          completed: false
        },
        {
          id: uuid(),
          text: 'practice guitar',
          completed: true
        }
      ]
  }
},
handleSearch: function(searchText, showCompleted){
  this.setState({
    showCompleted: showCompleted,
    searchText: searchText.toLowerCase()
  });
},
handleToggle: function(id){
  var updatedTodos = this.state.todos.map((todo) => {
    if(todo.id === id){
      todo.completed = !todo.completed;
    }
    return todo;
  });
  this.setState({
    todos: updatedTodos
  });
},
handleAddTodo: function(text){
  this.setState({
    todos: [
      ...this.state.todos,
      {
        id: uuid(),
        text: text,
        completed: false
      }
    ]
  });
},
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} todoToggle={this.handleToggle}/>
        <AddTodo addTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
