export var toggleHeroVisible = isVisible => {
  return {
    type: 'TOGGLE_HERO_VISIBLE',
    isVisible
  }
}

export var setSelectedProject = selectedProject => {
  return {
    type: 'SET_SELECTED_PROJECT',
    selectedProject
  }
}
