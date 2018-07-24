var React = require('react');

var Todo = React.createClass({
  render: function(){
    var {completed, text, id} = this.props;
    return(
      <div onClick={
        () => {
          this.props.todoToggle(id);
        }
      }>
        <input type="checkbox" checked={completed} />
        {text}
      </div>
    );
  }
});

module.exports = Todo;
