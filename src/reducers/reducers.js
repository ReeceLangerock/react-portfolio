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