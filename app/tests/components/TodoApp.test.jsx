var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () =>{
    expect(TodoApp).toExist()
  });
});
