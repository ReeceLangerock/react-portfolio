import React from 'react'
import ReactDOM from 'react-dom'
import App from './../App'
import configureStore from 'redux-mock-store'
import sinon from 'sinon'

import { shallow, mount, find } from 'enzyme'
const initialState = { selectedProject: 'test project' }

const mockStore = configureStore()

describe('<App />', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<App />)
  })
})
