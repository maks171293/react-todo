var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var TodoApp = require('TodoApp');
import TodoList from 'TodoList';
var configureStore = require('configureStore');

describe('TodoApp', () => {
  it('should exist', () =>{
    expect(TodoApp).toExist()
  });
  it('should render todo list',() =>{
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  })
});
