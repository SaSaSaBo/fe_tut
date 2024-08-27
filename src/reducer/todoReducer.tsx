function reducer(state: any, action: {
    todo: any; type: any; value: any; 
}) {
    switch (action.type) {
    case 'SET_TODO':
      return {
        ...state,
        todo: action.value
      }
    case 'ADD_TODO':
      return {
        ...state,
        todo: '',
        todos: [
          ...state.todos,
          action.todo
        ]
      }
  }
}

export default reducer