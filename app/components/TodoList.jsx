var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    var renderTodos = () => {
      return (
        todos.map((todo) => {
          return (<Todo key={todos.id} {...todo} todoToggle={this.props.todoToggle}/>);
        })
      );
    };
    return(
      <div>
          {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
