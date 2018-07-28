var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function(){
    var {completed, text, id, createdAt, completedAt} = this.props;
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
      <div onClick={
        () => {
          this.props.todoToggle(id);
        }
      }>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
