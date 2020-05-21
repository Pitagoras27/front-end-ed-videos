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
      return {
        ...state,
        mylist: state.mylist.filter((item) => parseInt(action.payload) !== item.id),
      };
    default:
      return state;
  }
};

export default reducer;
