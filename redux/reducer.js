export const initialState = {
  theme: true,
  searchInput:"",
  allCountries:null,
  filter:""
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "SEARCH_INPUT":
      return {
        ...state,
        searchInput:action.payload
      }
    case "ALL_COUNTRIES":
      return {
        ...state,
        allCountries:action.payload
      }
    case "SET_FILTER":
      return {
        ...state,
        filter:action.payload
      }
    default:
      return state;
  }
};
