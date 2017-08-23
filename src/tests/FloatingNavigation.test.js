import React from 'react';
import ReactDOM from 'react-dom';
import {FloatingNavigation} from './../components/navigation/FloatingNavigation'
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'


describe('>>>FloatingNavigation --- Shallow Render REACT COMPONENTS',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<FloatingNavigation />)
        
    })

    it('+++ render the DUMB component', () => {
       expect(wrapper.length).toEqual(1)
    });
    
});


//*******************************************************************************************************
describe('>>>FloatingNavigation --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = {output:100}
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<FloatingNavigation store={store} /> )  
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });


});