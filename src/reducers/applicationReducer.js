export const initialState = {
  name: "",
  email: "",
  phone: "",
  resume: "",
  coverLetter: "",
  errors: {},
  submitted: false,
};

function applicationReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: "",
        },
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };

    case "SUBMIT_SUCCESS":
      return {
        ...state,
        submitted: true,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default applicationReducer;