const UserReducer = (state, action) => {

  console.log(state);

  switch (action.type) {
    case "DEL":
      return { userData: state.userData.filter(elem => elem.id !== action.payload) };
    case "EDIT":
      return {
        userData: state.userData,
        edit: { flag: true, id: action.payload, item: state.userData.filter(elem => elem.id === action.payload) }
      };
    case "ADD":
      return { userData: [{ ...action.payload, id: Date.now() }, ...state.userData] };
    case "FETCH_SUCCESS":
      return {
        userData: action.payload,
        edit: { flag: false, id: null, item: {} }
      };
    default:
      throw Error("Action name not defined");
  }
};

export default UserReducer;
