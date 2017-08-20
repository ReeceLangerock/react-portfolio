import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Portfolio from "./../components/portfolio/Portfolio";
import { shallow, mount, find } from "enzyme";
import configureStore from "redux-mock-store";

//*******************************************************************************************************
describe(">>>PORTFOLIO --- REACT-REDUX (Mount + wrapping in <Provider>)", () => {
  const initialState = { selectedProject: 'NONE' };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Portfolio />
      </Provider>
    );
  });

  
  it("+++ render the connected(SMART) component", () => {
    console.log(wrapper)
    expect(wrapper.find(Portfolio).length).toEqual(1);
  });

  it("+++ check Prop matches with initialState", () => {
    expect(wrapper.find(Portfolio).prop("selectedProject")).toEqual(initialState.selectedProject);
  });

  // it('+++ check action on dispatching ', () => {
  //     let action
  //     store.dispatch(addInputs(500))
  //     store.dispatch(subtractInputs(100))
  //     action = store.getActions()
  //     expect(action[0].type).toBe("ADD_INPUTS")
  //     expect(action[1].type).toBe("SUBTRACT_INPUTS")
  // });
});
