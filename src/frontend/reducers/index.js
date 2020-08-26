const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ROUTEMENU':
      return {
        ...state, //retorna estado de la app
        menu: action.payload, //cambia el estado
      }
    case 'SET_MODAL_OPEN':
      return {
        ...state,
        modal: action.payload,
      }
    default:
      return state
  }
}

export default reducer
