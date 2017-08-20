//REDUCERS
//----------------

export var componentVisibilityReducer = (state = { heroVisible: true }, action) => {
  switch (action.type) {
    case "TOGGLE_HERO_VISIBLE":
      return { ...state, heroVisible: action.isVisible };

    default:
      return state;
  }
};

export var portfolioProjectReducer = (state = { selectedProject: 'NONE', itemToRender: undefined }, action) => {
  switch (action.type) {
    case "SET_SELECTED_PROJECT":
      return { ...state, selectedProject: action.selectedProject };
    default:
      return state;
  }
};
