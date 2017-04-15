var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate todo text', () => {
    var todo = {
      type: 'ADD_TODO',
      text: 'Add todo'
    };
    var res = actions.addTodo(todo.text);
    expect(res).toEqual(todo);
  });

  it('should toggle completed todos', () => {
    var completed = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(completed);
  });

  it('should toggle todos to be completed or not', () => {
    var todo = {
      type: 'TOGGLE_TODO',
      id: 2
    };
    var res = actions.toggleTodo(todo.id);
    expect(res).toEqual(todo);
  });
})
