import React from 'react';
import ReactDOM from 'react-dom';
import Project from './../components/portfolio/Project'
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'

// describe('>>>Project --- Shallow Render REACT COMPONENTS',()=>{
//     let wrapper;
//     let projectName = "test project";
    
//     beforeEach(()=>{
//         wrapper = shallow(<Project projectName ={projectName}/>)
        
//     })

//     it('+++ render the DUMB component', () => {
//        expect(wrapper.length).toEqual(1)
//     });
    
// });

//*******************************************************************************************************
describe('>>>Project --- REACT-REDUX (Shallow + passing the {store} directly)',()=>{
    const initialState = {selectedProject:"test project"}
    const mockStore = configureStore();
    let projectName = "test project";
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Project store={store} projectName ={projectName}/> )  
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });


});