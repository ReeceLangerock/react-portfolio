import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './../components/portfolio/Portfolio'

it('Portfolio renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Portfolio />, div);
});
