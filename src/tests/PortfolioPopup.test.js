import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioPopup from './../components/portfolio/PortfolioPopup'

it('PortfolioPopup renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PortfolioPopup />, div);
});
