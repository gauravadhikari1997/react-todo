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
      <div className="containers__footer">
        <form onSubmit={this.addTodoInput}>
          <input type="text" ref="todo" placeholder="Add new todo" />
          <button className="button expanded">AddTodo</button>
        </form>
        </div>
    );
  }
});

module.exports = AddTodo;
