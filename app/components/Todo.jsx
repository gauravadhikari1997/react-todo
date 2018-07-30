var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function(){
    var {completed, text, id, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'created @ ';
      var timestamp = createdAt;
      if (completed){
        var message = 'completed @ ';
        var timestamp = completedAt;
      }
      return (message + moment.unix(timestamp).format('MMM Do YYYY h:mm a'));
    };
    return(
      <div className={todoClassName} onClick={
        () => {
          this.props.todoToggle(id);
        }
      }>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext"><cite>{renderDate()}</cite></p>
        </div>
      </div>
    );
  }
});

module.exports = Todo;
