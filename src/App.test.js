import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { MemoryRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  , div);
});
