let $ = require('jquery');

module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
    };
    return todos;
  },

  getTodos: function(){
    let stringTodos = localStorage.getItem('todos');
    let todos = [];
    try{
      todos = JSON.parse(stringTodos);
    }catch(e){

    }
    if($.isArray(todos)){
      return todos;
    }else{
      return [];
    }
  },

  filterTodos: function(todos, showCompleted, searchText){
    let filteredTodos = todos;
    //filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted
    });

    //filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      let text = todo.text.toLowerCase();
      if(text.indexOf(searchText) !== -1){
        return todo;
      }else{
        return false;
      }
    });

    //sort if todo is done or not
    filteredTodos = filteredTodos.sort((a,b) =>{
      if(a.completed && !b.completed){
        return 1;
      }else if(!a.completed && b.completed){
        return -1;
      }else{
        return 0;
      }
    })

    return filteredTodos
  }
};
