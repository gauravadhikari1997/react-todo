var expect = require('expect');
var reducers = require('reducers');

var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set state searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Something'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Do homework'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should flip todo completed status on toggle todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };

      var res = reducers.todosReducer(df([{
        id: '123',
        text: 'text',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }]), df(action));

      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});