import { TODO_ACTIONS } from '../actions/todoActions';

const INITIAL_STATE = [];

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [
        ...state,
        { id: action.payload.id, text: action.payload.text, completed: false },
      ];
    case TODO_ACTIONS.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case TODO_ACTIONS.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case TODO_ACTIONS.CLEAR_TODOS:
      return [];
    default:
      return state;
  }
}

export default todoReducer;
