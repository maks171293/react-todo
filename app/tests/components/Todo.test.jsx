var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var {Todo} = require('Todo');

describe('Todo', () => {
  it('should exist', () =>{
    expect(Todo).toExist()
  });
});
