import React from 'react';
import { render } from '@testing-library/react';
//import { Provider } from 'react-redux';
//import { store } from './app/store';
import App from './components/App';
import {screen} from '@testing-library/dom'

test('renders learn react link', () => {
  render(
    //<Provider store={store}>
      <App />
    //</Provider>
  );

  expect(screen.getByText('This has been more work than it is worth!')).toBeInTheDocument();
});