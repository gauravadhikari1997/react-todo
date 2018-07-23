var React = require('react');

var AddTodo = React.createClass({
  addTodoInput: function(e){
    e.preventDefault();

    var newTodo = this.refs.todo.value;
    if(newTodo.length > 0){
      this.refs.todo.value = "";
      this.props.addTodo(newTodo);
    }else{
      this.refs.todo.focus();
    }
  },
  render: function(){
    return (
        <form onSubmit={this.addTodoInput}>
          <input type="text" ref="todo" placeholder="Add new todo" />
          <button className="button expanded hollow">AddTodo</button>
        </form>
    );
  }
});

module.exports = AddTodo;
