const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ROUTEMENU':
      return {
        ...state, //retorna estado de la app
        menu: action.payload, //cambia el estado
      }

    default:
      return state
  }
}

export default reducer
