import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
var {Provider} = require('react-redux');
var TodoApp = require('TodoApp.jsx');
import 'style!css!foundation-sites/dist/css/foundation.min.css';
var actions = require('actions');
var store = require('configureStore').configure();
$(document).foundation();

store.subscribe(() => {
  console.log('store', store.getState());
});

store.dispatch(actions.addTodo('Get job'));
store.dispatch(actions.setSearchText('job'));
store.dispatch(actions.toggleShowCompleted());


import 'style!css!sass!applicationStyles';

ReactDOM.render(
<Provider store={store}><TodoApp/></Provider>,
  document.getElementById('app')
);
