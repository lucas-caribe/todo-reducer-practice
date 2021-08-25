import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeTodo, toggleTodo } from '../actions/todoActions';

class Todo extends Component {
  handleClick = () => {
    const { todo, removeTodoClick } = this.props;

    removeTodoClick(todo);
  }

  handleToggle = () => {
    const { todo, toggleTodoClick } = this.props;

    toggleTodoClick(todo);
  }

  render() {
    const { todo } = this.props;
    const todoClass = todo.completed ? 'todo completed' : 'todo';

    return (
      <li className={ todoClass } onClick={ this.handleToggle }>
        { todo.text }
        <button type="button" onClick={ this.handleClick }>remove todo</button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleTodoClick: (todo) => dispatch(toggleTodo(todo)), 
  removeTodoClick: (todo) => dispatch(removeTodo(todo)),
})

export default connect(null, mapDispatchToProps)(Todo);
