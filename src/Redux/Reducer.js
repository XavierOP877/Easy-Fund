const initialState = {
    Contract: null,
    Metamask: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action?.type) {
      case 'SetContract':
        return { ...state, Contract: action.payload };
      case 'SetMetamask':
        return { ...state, Metamask: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;