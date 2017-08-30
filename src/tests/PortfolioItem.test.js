import React from 'react'
import ReactDOM from 'react-dom'
import { PortfolioItem } from './../components/portfolio/PortfolioItem'
import portfolio from './../data/portfolio.json'
import configureStore from 'redux-mock-store'
import { shallow, mount, find } from 'enzyme'

const mockStore = configureStore()
const initialState = { selectedProject: 'test project' }
const testProject = 'Libru'

it('renders without crashing', () => {
  let store = mockStore(initialState)
  shallow(<PortfolioItem itemInfo={portfolio[testProject]} itemName={testProject} />)
})
