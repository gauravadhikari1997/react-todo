var redux = require('redux');
var {
  searchTextReducer,
  todosReducer,
  showCompletedReducer
} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    todos: todosReducer,
    showCompleted: showCompletedReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};