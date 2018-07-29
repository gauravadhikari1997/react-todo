var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function(){
    var searchText = this.refs.searchText.value;
    var showCompleted = this.refs.showCompleted.checked;

    this.props.onSearch(searchText, showCompleted);
  },
  render: function(){
    return(
      <div>
        <input type='search' ref='searchText' placeholder="Search todos" onChange={this.handleSearch}/>
      <div className="containers__header">
          <label>
            <input type='checkbox' ref='showCompleted' onChange={this.handleSearch} />
            <kbd>Show completed todos</kbd>
          </label>
      </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
