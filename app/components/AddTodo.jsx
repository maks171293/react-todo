import React from 'react';

let AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    let todoText = this.refs.todoText.value;
    if(todoText.length > 0){
      this.props.onAddTodo(todoText);
      this.refs.todoText.value = '';
    }else{
      this.refs.todoText.focus();
    }
  },
  render: function(){
    return (
      <div>
        <form className='add-todo-form' onSubmit={this.handleSubmit}>
          <input type='text' placeholder='What do you need to do?' ref='todoText'/>
          <button className='button'>Add Todo</button>
        </form>
      </div>
    )
  }
});

export default AddTodo;
