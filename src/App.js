import React from 'react';
import { connect } from 'react-redux';

import Todo from './components/Todo';

import { addTodo, clearTodos } from './actions/todoActions';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      todoInput: target.value,
    });
  }

  handleClick = () => {
    const { todoInput } = this.state;
    const { todos, addTodoClick } = this.props;

    addTodoClick({ id: todos.length, text: todoInput });

    this.setState({
      todoInput: '',
    });
  }

  render() {
    const { todoInput } = this.state;
    const { todos, clearTodosClick } = this.props;

    return (
      <div className="App">
        <input type="text" onChange={ this.handleChange } value={todoInput} />
        <button type="button" onClick={ this.handleClick }>
          add todo
        </button>

        <ul className="todo-list">
          {todos &&
            todos.map((todo, index) => <Todo key={index} todo={todo} />)}
        </ul>

        <button type="button" onClick={ clearTodosClick }>clear todos</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = (dispatch) => ({
  clearTodosClick: () => dispatch(clearTodos()),
  addTodoClick: (todo) => dispatch(addTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
