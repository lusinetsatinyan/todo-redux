const initialState = {
  todos: {},
  selectedDate: null,
}

export const ADD = "ADD"
export const SET_SELECTED_TODO = "SET_SELECTED_TODO"
export const DELETE_ITEM = "DELETE_ITEM"
export const SAVE_EDITED_INPUT = "SAVE_EDITED INPUT"

const todos = (state=initialState, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case ADD : {
      const { key, value } = action;
      return {
        ...state,
        todos: {
          ...state.todos,
          [key]: [
            ...(state.todos && state.todos[key] ? state.todos[key] : []),
            value
          ]
        },
      }
    }
    case SET_SELECTED_TODO: {
      return {
        ...state,
        selectedDate: action.key
      }
    }

    case DELETE_ITEM: {
      const { id, key } = action;
      const updatedTodos = state.todos[key].filter((item) => item.id !== id);
      const updatedState = {
        ...state,
        todos: {
          ...state.todos,
          [key]: [...updatedTodos]
        }
      }

      if(updatedTodos.length === 0){
        delete updatedState.todos[key];
        updatedState.selectedDate = null;
      }
      return updatedState;
    }
    case SAVE_EDITED_INPUT: {
      const { id, key, label } = action;
      const updatedLabel = state.todos[key].map((item) => {
        if(item.id === id) {
          return {
            ...item,
            label: label
          }
        }
        return item;
      })
      return {
        ...state,
        todos: {
          ...state.todos,
          [key]: [...updatedLabel]
        }
      }
    }
  }
  return state;
}

export default todos;