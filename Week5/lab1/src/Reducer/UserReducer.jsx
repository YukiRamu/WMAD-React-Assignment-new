const UserReducer = (state, action) => {

  switch (action.type) {
    case "DEL":
      return { userData: state.userData.filter(elem => elem.id !== action.payload) };
    case "ADD":
      return { userData: [ { ...action.payload, id: Date.now() }, ...state.userData] };
    case "FETCH_SUCCESS":
      return {
        userData: action.payload
      };
    default:
      throw Error("Action name not defined");
  }
};

export default UserReducer;
