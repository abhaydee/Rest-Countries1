export const initialState = {
  theme: true,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
