import React from 'react';
var {connect} = require('react-redux');
import moment from 'moment';
var actions = require('actions');

export var Todo = React.createClass({
  render: function(){
    let {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    let renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed){
        message = 'Completed ';
        var timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')
    }
    return (
      <div className={todoClassName} onClick={() => {
        dispatch(actions.toggleTodo(id));
      }}>
        <div>
          <input type='checkbox' checked={completed} />
        </div>
        <div>
          <p>{ text}</p>
          <p className='todo__subtext'>{renderDate()}</p>
        </div>
      </div>
    );
  }
});
export default connect()(Todo);
