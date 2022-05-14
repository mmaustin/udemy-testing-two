import React from 'react';
import { render, screen } from '@testing-library/react';
//import { Provider } from 'react-redux';
//import { store } from './app/store';
import App from '../App';
//import {screen} from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect';


test('renders Comment List', () => {
  render(
    //<Provider> //store={store}>
      <App />
    //</Provider>
  );

  expect(screen.getByText('Comment List')).toBeInTheDocument();
});

test('renders Comment Box', () => {
  render(
    //<Provider> //store={store}>
      <App />
    //</Provider>
  );

  expect(screen.getByText('Comment Box')).toBeVisible();
});