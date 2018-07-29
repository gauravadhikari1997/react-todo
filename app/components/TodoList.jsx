var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos, todoToggle} = this.props;
    var renderTodos = () => {
      if(todos.length === 0){
        return <p className="containers__message">Nothing To Do!</p>;
      }
      return todos.map((todo) => {
        return  (
          <Todo key={todo.id} todoToggle={todoToggle} {...todo}/>
        );
      });
    };

    return(
      <div className="containers">
          {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
