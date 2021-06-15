const UserReducer = (state, action) => {

  console.log("inside Reducer", state);

  switch (action.type) {
    case "DEL":
      return console.log(action.payload);
    case "Add":
      return {

      };
    default:
      break;
  }
};

export default UserReducer;
