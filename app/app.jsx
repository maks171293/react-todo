import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
var {Provider} = require('react-redux');
var TodoApp = require('TodoApp.jsx');
import 'style!css!foundation-sites/dist/css/foundation.min.css';
var actions = require('actions');
var store = require('configureStore').configure();
$(document).foundation();
var TodoAPI = require('TodoAPI');

store.subscribe(() => {
  var state = store.getState();
  console.log('store', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

import 'style!css!sass!applicationStyles';

ReactDOM.render(
<Provider store={store}><TodoApp/></Provider>,
  document.getElementById('app')
);
