const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        mylist: [
          ...state.mylist,
          action.payload,
        ],
      };
    case 'REMOVE_FAVORITE':
      const correctType = parseInt(action.payload);
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id !== correctType),
      };
    case 'SEND_FORM':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER':
      return {
        ...state,
        user: action.payload,
      };
    case 'PLAYING':
      return {
        ...state,
        playing: state.trends.find((item) => (item.id === Number(action.payload))) ||
        state.originals.find((item) => item.id === Number(action.payload)) ||
        [],
      };
    default:
      return state;
  }
};

export default reducer;
