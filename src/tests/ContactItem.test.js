import React from 'react';
import ReactDOM from 'react-dom';
import ContactItem from './../components/contact/ContactItem'

it('ContactItem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactItem />, div);
});
