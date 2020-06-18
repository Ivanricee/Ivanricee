const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVEMENU':
      return {
        ...state, //retorna estado de la app
        menu: action.payload, //cambia el estado
      }
      break

    default:
      return state
      break
  }
}

export default reducer
