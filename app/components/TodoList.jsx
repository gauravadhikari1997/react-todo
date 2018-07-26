var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos, todoToggle} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return  (
          <Todo key={todo.id} todoToggle={todoToggle} {...todo}/>
        );
      });
    };

    return(
      <div>
          {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
