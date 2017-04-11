import React from 'react';
import moment from 'moment';

var Todo = React.createClass({
  render: function(){
    let {id, text, completed, createdAt, completedAt} = this.props;
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
      <div onClick={() => {
        this.props.onToggle(id)
      }}>
        <input type='checkbox' checked={completed} />
        <p>{ text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

export default Todo;
