import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
var TodoApp = require('TodoApp.jsx');
import 'style!css!foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

import 'style!css!sass!applicationStyles';

ReactDOM.render(
<TodoApp/>,
  document.getElementById('app')
);
