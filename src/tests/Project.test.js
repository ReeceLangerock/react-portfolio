import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import { Project } from './../components/portfolio/Project'
import { shallow, mount, find } from 'enzyme'
const initialState = { selectedProject: 'test project' }

const mockStore = configureStore()

describe('test', () => {
  it('renders without crashing', () => {
    let store = mockStore(initialState)

    shallow(<Project projectName='NONE' />)
  })

  it('renders without crashing', () => {
    let store = mockStore(initialState)

    shallow(<Project projectName='Libru' />)
  })
})
