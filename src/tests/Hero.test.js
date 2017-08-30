import React from 'react'
import ReactDOM from 'react-dom'
import {Hero} from './../components/hero/Hero'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

describe('>>>HERO --- Shallow Render REACT COMPONENTS', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Hero />)
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  })
})

//* ******************************************************************************************************
describe('>>>HERO --- REACT-REDUX (Shallow + passing the {store} directly)', () => {
  const initialState = {output: 100}
  const mockStore = configureStore()
  let store, container

  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<Hero store={store} />)
  })

  it('+++ render the connected(SMART) component', () => {
    expect(container.length).toEqual(1)
  })
})
