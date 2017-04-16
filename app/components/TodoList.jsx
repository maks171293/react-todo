import React from 'react';
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function(){
    let {todos, showCompleted, searchText} = this.props;
    var renderTodo = () => {
      if(todos.length ===0){
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo)=>{
        return <Todo key={todo.id} {...todo}/>
      })
    };
    return (
      <div>
        {renderTodo()}
      </div>
    );
  }
});

export default connect((state) => {
  return state;
})(TodoList);
