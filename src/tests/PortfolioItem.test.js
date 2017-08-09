import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioItem from './../components/portfolio/PortfolioItem'

it('PortfolioItem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioItem />, div);
});
