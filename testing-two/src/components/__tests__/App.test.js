import React from 'react';
import { render, screen } from '@testing-library/react';
//import { Provider } from 'react-redux';
//import { store } from './app/store';
import App from '../App';
import '@testing-library/jest-dom/'
//what happens if you don't add the changes??


test('renders Comment List', () => {
  render(
    //<Provider> //store={store}>
      <App />
    //</Provider>
  );

  expect(screen.getByRole('button')).toHaveTextContent('Click Me');
});
