import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about/About'

it('About renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
});
