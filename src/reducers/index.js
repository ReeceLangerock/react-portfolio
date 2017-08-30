
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
  portfolioProjectReducer,
  componentVisibilityReducer
} from './reducers'

export default combineReducers({
  routing: routerReducer,
  componentVisibilityReducer,
  portfolioProjectReducer
})
