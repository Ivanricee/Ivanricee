const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_HASHMENU':
      return {
        ...state, //retorna estado de la app
        menu: action.payload, //cambia el estado
      }
    case 'SET_MODAL_OPEN':
      return {
        ...state,
        modal: action.payload,
      }
    case 'SET_PORTFOLIO_MENU':
      return {
        ...state,
        portfolioMenu: action.payload,
      }
    default:
      return state
  }
}

export default reducer
