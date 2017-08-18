// export var updateSelectedHomeUser = homeUser => {
//   return {
//     type: "UPDATE_SELECTED_HOME_USER",
//     homeUser
//   };
// };

// export var updateSelectedAwayUser = awayUser => {
//   return {
//     type: "UPDATE_SELECTED_AWAY_USER",
//     awayUser
//   };
// };

// export var isGeneratingH2HStatistics = () => {
//   return {
//     type: "TOGGLE_ISGENERATING_H2H_STATISTICS"
//   };
// };

// export var generateH2HStatistics = (includeRegularSeason, includePlayoffs, seasonSelected) => {
//   return (dispatch) => {
//   dispatch(isGeneratingH2HStatistics())
//   h2hHandler.run(includeRegularSeason, includePlayoffs,seasonSelected).then((data) => {
//     dispatch ({
//       type: "GENERATE_H2H_STATISTICS",
//       data
//     });
//     (dispatch(isGeneratingH2HStatistics()));
//     })

//  }
// };

export var toggleHeroVisible = isVisible => {
  return {
    type: "TOGGLE_HERO_VISIBLE",
    isVisible
  };
};

export var setSelectedProject = selectedProject => {
  return {
    type: "SET_SELECTED_PROJECT",
    selectedProject
  };
};
