//REDUCERS
//----------------

// export var awardDataReducer = (state = { awardData, trophy: "Champion" }, action) => {
//   switch (action.type) {
//     case "UPDATE_TROPHY":
//       return { ...state, trophy: action.trophy };
//     default:
//       return state;
//   }
// };

// export var seasonStatsGenerationReducer = (state = { isGenerating: false, neitherRegularOrPlayoff: false, data: {} }, action) => {
//   switch (action.type) {
//     case "TOGGLE_ISGENERATING_LEAGUE_STATISTICS":
//       return { ...state, isGenerating: !state.isGenerating };

//     case "GENERATE_LEAGUE_STATISTICS":
//       return { ...state, data: action.data };

//     default:
//       return state;
//   }
// };

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
