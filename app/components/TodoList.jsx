import React from 'react';
import Todo from 'Todo';

var TodoList = React.createClass({
  render: function(){
    let {todos} = this.props;
    var renderTodo = () => {
      return todos.map((todo)=>{
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

module.exports = TodoList;
