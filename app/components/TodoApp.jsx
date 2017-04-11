var React = require('react');
var TodoList = require('TodoList');
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id:uuid(),
          text: 'Clean the room'
        },
        {
          id:uuid(),
          text: 'Buy the car'
        },
        {
          id:uuid(),
          text: 'Understand redux'
        }
      ]
    };
  },
  handleAddTodo: function(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function(){
    var {todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
