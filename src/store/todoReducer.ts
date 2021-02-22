import { Action, ItemsState, ItemTypes } from './types';

const initialState: ItemsState = {
  todos: [],
};

export default (state = initialState, action: Action): ItemsState => {
  switch (action.type) {
    case ItemTypes.ADD_ITEM:
      return {
        todos: [
          ...state.todos,
          {
            id: Math.random(),
            text: action.payload.text,
            editing: false,
            complete: false,
          },
        ],
      };

    case ItemTypes.EDIT_ITEM:
      return {
        todos: state.todos.map(item =>
          item.id === action.payload.id ? { ...item, editing: !item.editing } : item,
        ),
      };

    default:
      return state;
  }
};
