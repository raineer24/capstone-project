import { useReducer } from "react";

// Initial State:
const initialState = {
  personalInfo: {
    name: "",
    email: "",
  },
  roleDetails: {
    role: "",
    permissions: [],
  },
  address: {
    street: "",
    city: "",
    country: "",
  },
};

//Reducer Function
function formReducer(state, action) {
  switch (action.type) {
    case "updatedField":
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          [action.field]: action.value,
        },
      };
    case "reset":
      return { ...initialState };
    default:
      return state;
  }
}

// Custom Hook
export const  useFormReducer = (initialStateOverride = initialState) => {
    const [state, dispatch] = useReducer(formReducer, initialStateOverride)

    const updateField = (sectiom, field, value) => {
        dispatch({ type: 'updateField', section, field, value})
    }

    const resetForm = () => {
        dispatch({ type: 'reset'});
    }
}
