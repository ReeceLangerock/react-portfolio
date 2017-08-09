import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './../components/navigation/Navigation'

it('Navigation renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation />, div);
});
