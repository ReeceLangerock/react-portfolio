import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioItem from './../components/portfolio/PortfolioItem'
import portfolio from "./../data/portfolio.json";


it('PortfolioItem renders without crashing', () => {
  const div = document.createElement('div');
  const mockStore = configureStore();
    let projectName = "test project";
    let store,container;
  ReactDOM.render(<PortfolioItem itemName={"project"} itemInfo={portfolio.Libru}/>, div);
});
